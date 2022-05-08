const [onEditorTypeChanged, runCode] = (function () {
    var exportObjects = [];

    var editor = null;
    var languageExamples = {
        'javascript': "function hi() {\n\tconsole.log('Hello, world!');\n}\n",
        'python': "def main():\n\tprint('Hello, world!')\n",
        'scala': '@main def hello = println("Hello, world!")\n'
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


    function sendCode(codeObject) {
        var formData = new FormData();

        formData.append('language', codeObject['language']);
        var codeFile = new File([codeObject['code']], 'code.txt', {
            type: 'text/plain',
        });
        formData.append('code', codeFile);

        var request = new XMLHttpRequest();
        request.open('POST', 'http://localhost:8081/submit');
        request.send(formData);
    }


    function runCode() {
        var code = editor.getValue();
        var language = currentLanguage;
        var codeObject = {
            'language': language,
            'code': code,
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
        theme: 'vs'
    });


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
