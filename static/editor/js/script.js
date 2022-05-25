const [onEditorTypeChanged, setLanguage, saveCode, runCode, setCode] = (function () {
    var exportObjects = [];

    var editor = null;
    var languageExamples = {
        'javascript': "function hi() {\n\tconsole.log('Hello, world!');\n}\n",
        'python': "def main():\n\tprint('Hello, world!')\n",
        'cpp': '#include <iostream>\n\nusing namespace std;\n\nint main() {\n\tcout << "Hello, world!" << endl;\n}\n'
    }


    function selectedModel() {
        var select = document.getElementById('models-select');
        return select.options[select.selectedIndex].value;
    }
    var currentLanguage = selectedModel();


    function createLanguageModel(modelLanguage) {
        return monaco.editor.createModel(languageExamples[modelLanguage], modelLanguage);
    }


    var avaliableModels = (function () {
        var select = document.getElementById('models-select');
        var modelsNames = [];
        for (var i = 0; i < select.childNodes.length; ++i) {
            modelsNames.push(select.childNodes[i].value);
        }
        modelsNames = modelsNames.filter(x => x);

        var avaliableModels = {}
        for (var i = 0; i < modelsNames.length; ++i) {
            var model = modelsNames[i];
            avaliableModels[model] = createLanguageModel(model);
        }
        return avaliableModels;
    })();


    function onEditorTypeChanged(selectedObject) {
        var type = selectedObject.value;
        currentLanguage = type;
        editor.setModel(avaliableModels[type]);
    }
    exportObjects.push(onEditorTypeChanged);


    function setLanguage(language) {
        document.getElementById('models-select').value = language;
        onEditorTypeChanged(document.getElementById('models-select'));
    }
    exportObjects.push(setLanguage);


    function sendCode(codeObject) {
        var formData = new FormData();

        formData.append('language', codeObject['language']);
        var codeFile = new File([codeObject['code']], 'code.txt', {
            type: 'text/plain',
        });
        formData.append('code', codeFile);

        var inpitFile = new File([codeObject['input']], 'input.txt', {
            type: 'text/plain',
        });
        formData.append('input', inpitFile);

        var request = new XMLHttpRequest();
        request.open('POST', 'http://localhost:8081/submit');
        request.send(formData);
        request.onreadystatechange = () => {
            if (request.readyState == XMLHttpRequest.DONE) {
                console.log(request.responseText);
                document.getElementById('output').value = request.responseText;
            }
        }
    }


    function saveCode() {
        var formData = new FormData();

        formData.append('language', selectedModel());
        formData.append('code', editor.getValue());
        formData.append('input', document.getElementById('input').value);

        var request = new XMLHttpRequest();
        request.open('POST', 'http://localhost:8000/save/');
        formData.append('Access-Control-Allow-Origin', '*');
        request.send(formData);
        request.onreadystatechange = () => {
            if (request.readyState == XMLHttpRequest.DONE) {
                console.log(request.responseText);
            }
        }
    }
    exportObjects.push(saveCode);


    function runCode() {
        var code = editor.getValue();
        var language = currentLanguage;
        var inputText = document.getElementById('input').value;
        var codeObject = {
            'language': language,
            'code': code,
            'input': inputText,
        }
        sendCode(codeObject)
        console.log(codeObject);
    }
    exportObjects.push(runCode);


    editor = monaco.editor.create(document.getElementById('code-container'), {
        value: languageExamples[selectedModel()],
        language: selectedModel(),

        scrollBeyondLastLine: false,
        roundedSelection: false,
        lineNumbers: 'on',
        readOnly: false,
        wordWrap: 'on',
        theme: 'vs',
        fontSize: '14px',
    });


    function setCode(code) {
        editor.getModel().setValue(code);
    }
    exportObjects.push(setCode);


    monaco.languages.registerCompletionItemProvider('python', {
        provideCompletionItems: function (model, position) {
            // find out if we are completing a property in the 'dependencies' object.
            // var textUntilPosition = model.getValueInRange({
            //     startLineNumber: 1,
            //     startColumn: 1,
            //     endLineNumber: position.lineNumber,
            //     endColumn: position.column
            // });
            // var match = textUntilPosition.match(
            //     /"dependencies"\s*:\s*\{\s*("[^"]*"\s*:\s*"[^"]*"\s*,\s*)*([^"]*)?$/
            // );
            // if (!match) {
            //     return { suggestions: [] };
            // }
            var word = model.getWordUntilPosition(position);
            var range = {
                startLineNumber: position.lineNumber,
                endLineNumber: position.lineNumber,
                startColumn: word.startColumn,
                endColumn: word.endColumn
            };
            return {
                suggestions: defaultPythonSuggestions(range)
            };
        }
    });

    return exportObjects;
})();
