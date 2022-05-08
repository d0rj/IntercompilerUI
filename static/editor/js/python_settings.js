function defaultPythonSuggestions(range) {
    return [
        {
            label: 'print',
            kind: monaco.languages.CompletionItemKind.Function,
            detail: 'Prints the values to a stream, or to sys.stdout by default.\nOptional keyword arguments:\nfile:  a file-like object (stream); defaults to the current sys.stdout.\nsep:   string inserted between values, default a space.\nend:   string appended after the last value, default a newline.\nflush: whether to forcibly flush the stream.',
            documentation: 'Prints the values to a stream, or to sys.stdout by default.\nOptional keyword arguments:\nfile:  a file-like object (stream); defaults to the current sys.stdout.\nsep:   string inserted between values, default a space.\nend:   string appended after the last value, default a newline.\nflush: whether to forcibly flush the stream.',
            insertText: 'print(\'${1:Hello, world!}\')$0',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range: range
        },
        {
            label: 'input',
            kind: monaco.languages.CompletionItemKind.Function,
            detail: 'Read a string from standard input.  The trailing newline is stripped.\n\nThe prompt string, if given, is printed to standard output without a\ntrailing newline before reading input.\n\nIf the user hits EOF (*nix: Ctrl-D, Windows: Ctrl-Z+Return), raise EOFError.\nOn *nix systems, readline is used if available.',
            documentation: 'Read a string from standard input.  The trailing newline is stripped.\n\nThe prompt string, if given, is printed to standard output without a\ntrailing newline before reading input.\n\nIf the user hits EOF (*nix: Ctrl-D, Windows: Ctrl-Z+Return), raise EOFError.\nOn *nix systems, readline is used if available.',
            insertText: 'input(\'Введите $1: \')$0',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range: range
        },
        {
            label: 'abs',
            kind: monaco.languages.CompletionItemKind.Function,
            detail: 'Return the absolute value of the argument.',
            documentation: 'Return the absolute value of the argument.',
            insertText: 'abs($1)$0',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range: range
        },
        {
            label: 'all',
            kind: monaco.languages.CompletionItemKind.Function,
            detail: 'Return True if bool(x) is True for all values x in the iterable.\n\nIf the iterable is empty, return True.',
            documentation: 'Return True if bool(x) is True for all values x in the iterable.\n\nIf the iterable is empty, return True.',
            insertText: 'all($1)$0',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range: range
        },
        {
            label: 'any',
            kind: monaco.languages.CompletionItemKind.Function,
            detail: 'Return True if bool(x) is True for any x in the iterable.\n\nIf the iterable is empty, return False.',
            documentation: 'Return True if bool(x) is True for any x in the iterable.\n\nIf the iterable is empty, return False.',
            insertText: 'any($1)$0',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range: range
        },
        {
            label: 'ascii',
            kind: monaco.languages.CompletionItemKind.Function,
            detail: 'Return an ASCII-only representation of an object.\n\nAs repr(), return a string containing a printable representation of an\nobject, but escape the non-ASCII characters in the string returned by\nrepr() using \\\\x, \\\\u or \\\\U escapes. This generates a string similar\nto that returned by repr() in Python 2.',
            documentation: 'Return an ASCII-only representation of an object.\n\nAs repr(), return a string containing a printable representation of an\nobject, but escape the non-ASCII characters in the string returned by\nrepr() using \\\\x, \\\\u or \\\\U escapes. This generates a string similar\nto that returned by repr() in Python 2.',
            insertText: 'ascii($1)$0',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range: range
        },
        {
            label: 'bin',
            kind: monaco.languages.CompletionItemKind.Function,
            detail: 'Return the binary representation of an integer.\n\n   >>> bin(2796202)\n   \'0b1010101010101010101010\'',
            documentation: 'Return the binary representation of an integer.\n\n   >>> bin(2796202)\n   \'0b1010101010101010101010\'',
            insertText: 'bin($1)$0',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range: range
        },
        {
            label: 'bool',
            kind: monaco.languages.CompletionItemKind.Function,
            detail: 'bool(x) -> bool\n\nReturns True when the argument x is true, False otherwise.\nThe builtins True and False are the only two instances of the class bool.\nThe class bool is a subclass of the class int, and cannot be subclassed.',
            documentation: 'bool(x) -> bool\n\nReturns True when the argument x is true, False otherwise.\nThe builtins True and False are the only two instances of the class bool.\nThe class bool is a subclass of the class int, and cannot be subclassed.',
            insertText: 'bool($1)$0',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range: range
        },
        {
            label: 'breakpoint',
            kind: monaco.languages.CompletionItemKind.Function,
            detail: 'breakpoint(*args, **kws)\n\nCall sys.breakpointhook(*args, **kws).  sys.breakpointhook() must accept\nwhatever arguments are passed.\n\nBy default, this drops you into the pdb debugger.',
            documentation: 'breakpoint(*args, **kws)\n\nCall sys.breakpointhook(*args, **kws).  sys.breakpointhook() must accept\nwhatever arguments are passed.\n\nBy default, this drops you into the pdb debugger.',
            insertText: 'breakpoint()',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range: range
        },
        {
            label: 'bytearray',
            kind: monaco.languages.CompletionItemKind.Function,
            detail: 'bytearray(iterable_of_ints) -> bytearray\nbytearray(string, encoding[, errors]) -> bytearray\nbytearray(bytes_or_buffer) -> mutable copy of bytes_or_buffer\nbytearray(int) -> bytes array of size given by the parameter initialized with null bytes\nbytearray() -> empty bytes array\n\nConstruct a mutable bytearray object from:\n  - an iterable yielding integers in range(256)\n  - a text string encoded using the specified encoding\n  - a bytes or a buffer object\n  - any object implementing the buffer API.\n  - an integer',
            documentation: 'bytearray(iterable_of_ints) -> bytearray\nbytearray(string, encoding[, errors]) -> bytearray\nbytearray(bytes_or_buffer) -> mutable copy of bytes_or_buffer\nbytearray(int) -> bytes array of size given by the parameter initialized with null bytes\nbytearray() -> empty bytes array\n\nConstruct a mutable bytearray object from:\n  - an iterable yielding integers in range(256)\n  - a text string encoded using the specified encoding\n  - a bytes or a buffer object\n  - any object implementing the buffer API.\n  - an integer',
            insertText: 'bytearray($1)$0',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range: range
        },
        {
            label: 'bytes',
            kind: monaco.languages.CompletionItemKind.Function,
            documentation: 'bytes(iterable_of_ints) -> bytes\nbytes(string, encoding[, errors]) -> bytes\nbytes(bytes_or_buffer) -> immutable copy of bytes_or_buffer\nbytes(int) -> bytes object of size given by the parameter initialized with null bytes\nbytes() -> empty bytes object\n\nConstruct an immutable array of bytes from:\n  - an iterable yielding integers in range(256)\n  - a text string encoded using the specified encoding\n  - any object implementing the buffer API.\n  - an integer',
            insertText: 'bytes($1)$0',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range: range
        },
        {
            label: 'chr',
            kind: monaco.languages.CompletionItemKind.Function,
            documentation: 'Return a Unicode string of one character with ordinal i; 0 <= i <= 0x10ffff.',
            insertText: 'chr($1)$0',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range: range
        },
        {
            label: 'compile',
            kind: monaco.languages.CompletionItemKind.Function,
            documentation: 'Compile source into a code object that can be executed by exec() or eval().\n\nThe source code may represent a Python module, statement or expression.\nThe filename will be used for run-time error messages.\nThe mode must be \'exec\' to compile a module, \'single\' to compile a\nsingle (interactive) statement, or \'eval\' to compile an expression.\nThe flags argument, if present, controls which future statements influence\nthe compilation of the code.\nThe dont_inherit argument, if true, stops the compilation inheriting\nthe effects of any future statements in effect in the code calling\ncompile; if absent or false these statements do influence the compilation,\nin addition to any features explicitly specified.',
            insertText: 'compile($1)$0',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range: range
        },
        {
            label: 'complex',
            kind: monaco.languages.CompletionItemKind.Function,
            documentation: 'Create a complex number from a real part and an optional imaginary part.\n\nThis is equivalent to (real + imag*1j) where imag defaults to 0.',
            insertText: 'complex($1, $2)$0',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range: range
        },
        {
            label: 'delattr',
            kind: monaco.languages.CompletionItemKind.Function,
            documentation: 'Deletes the named attribute from the given object.\n\ndelattr(x, \'y\') is equivalent to ``del x.y``',
            insertText: 'delattr($1, $2)$0',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range: range
        },
        {
            label: 'dict',
            kind: monaco.languages.CompletionItemKind.Function,
            documentation: 'dict() -> new empty dictionary\ndict(mapping) -> new dictionary initialized from a mapping object\'s\n    (key, value) pairs\ndict(iterable) -> new dictionary initialized as if via:\n    d = {}\n    for k, v in iterable:\n        d[k] = v\ndict(**kwargs) -> new dictionary initialized with the name=value pairs\n    in the keyword argument list.  For example:  dict(one=1, two=2)',
            insertText: 'dict($1)$0',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range: range
        },
        {
            label: 'dir',
            kind: monaco.languages.CompletionItemKind.Function,
            documentation: 'dir([object]) -> list of strings\n\nIf called without an argument, return the names in the current scope.\nElse, return an alphabetized list of names comprising (some of) the attributes\nof the given object, and of attributes reachable from it.\nIf the object supplies a method named __dir__, it will be used; otherwise\nthe default dir() logic is used and returns:\n  for a module object: the module\'s attributes.\n  for a class object:  its attributes, and recursively the attributes\n    of its bases.\n  for any other object: its attributes, its class\'s attributes, and\n    recursively the attributes of its class\'s base classes.',
            insertText: 'dir()',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range: range
        },
        {
            label: 'divmod',
            kind: monaco.languages.CompletionItemKind.Function,
            documentation: 'Return the tuple (x//y, x%y).  Invariant: div*y + mod == x.',
            insertText: 'divmod($1, $2)$0',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range: range
        },
        {
            label: 'enumerate',
            kind: monaco.languages.CompletionItemKind.Function,
            documentation: 'Return an enumerate object.\n\n  iterable\n    an object supporting iteration\n\nThe enumerate object yields pairs containing a count (from start, which\ndefaults to zero) and a value yielded by the iterable argument.\n\nenumerate is useful for obtaining an indexed list:\n    (0, seq[0]), (1, seq[1]), (2, seq[2]), ...',
            insertText: 'enumerate($1)$0',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range: range
        },
        {
            label: 'eval',
            kind: monaco.languages.CompletionItemKind.Function,
            documentation: 'Evaluate the given source in the context of globals and locals.\n\nThe source may be a string representing a Python expression\nor a code object as returned by compile().\nThe globals must be a dictionary and locals can be any mapping,\ndefaulting to the current globals and locals.\nIf only globals is given, locals defaults to it.',
            insertText: 'eval($1)$0',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range: range
        },
        {
            label: 'exec',
            kind: monaco.languages.CompletionItemKind.Function,
            documentation: 'Execute the given source in the context of globals and locals.\n\nThe source may be a string representing one or more Python statements\nor a code object as returned by compile().\nThe globals must be a dictionary and locals can be any mapping,\ndefaulting to the current globals and locals.\nIf only globals is given, locals defaults to it.',
            insertText: 'exec($1)$0',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range: range
        },
        {
            label: 'filter',
            kind: monaco.languages.CompletionItemKind.Function,
            documentation: 'filter(function or None, iterable) --> filter object\n\nReturn an iterator yielding those items of iterable for which function(item)\nis true. If function is None, return the items that are true.',
            insertText: 'filter($1, $2)$0',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range: range
        },
        {
            label: 'float',
            kind: monaco.languages.CompletionItemKind.Function,
            detail: 'Convert a string or number to a floating point number, if possible.',
            documentation: 'Convert a string or number to a floating point number, if possible.',
            insertText: 'float($1)$0',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range: range
        },
        {
            label: 'format',
            kind: monaco.languages.CompletionItemKind.Function,
            documentation: 'Return value.__format__(format_spec)\n\nformat_spec defaults to the empty string.\nSee the Format Specification Mini-Language section of help(\'FORMATTING\') for\ndetails.',
            insertText: 'format($1)$0',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range: range
        },
        {
            label: 'frozenset',
            kind: monaco.languages.CompletionItemKind.Function,
            documentation: 'frozenset() -> empty frozenset object\nfrozenset(iterable) -> frozenset object\n\nBuild an immutable unordered collection of unique elements.',
            insertText: 'frozenset()',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range: range
        },
        {
            label: 'getattr',
            kind: monaco.languages.CompletionItemKind.Function,
            documentation: 'getattr(object, name[, default]) -> value\n\nGet a named attribute from an object; getattr(x, \'y\') is equivalent to x.y.\nWhen a default argument is given, it is returned when the attribute doesn\'t\nexist; without it, an exception is raised in that case.',
            insertText: 'getattr($1, $2)$0',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range: range
        },
        {
            label: 'globals',
            kind: monaco.languages.CompletionItemKind.Function,
            documentation: 'Return the dictionary containing the current scope\'s global variables.\n\nNOTE: Updates to this dictionary *will* affect name lookups in the current\nglobal scope and vice-versa.',
            insertText: 'globals()',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range: range
        },
        {
            label: 'hasattr',
            kind: monaco.languages.CompletionItemKind.Function,
            documentation: 'Return whether the object has an attribute with the given name.\n\nThis is done by calling getattr(obj, name) and catching AttributeError.',
            insertText: 'hasattr($1, $2)$0',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range: range
        },
        {
            label: 'hash',
            kind: monaco.languages.CompletionItemKind.Function,
            documentation: 'Return the hash value for the given object.\n\nTwo objects that compare equal must also have the same hash value, but the\nreverse is not necessarily true.',
            insertText: 'hash($1)$0',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range: range
        },
        {
            label: 'help',
            kind: monaco.languages.CompletionItemKind.Function,
            documentation: 'Define the builtin \'help\'.\n\n    This is a wrapper around pydoc.help that provides a helpful message\n    when \'help\' is typed at the Python interactive prompt.\n\n    Calling help() at the Python prompt starts an interactive help session.\n    Calling help(thing) prints help for the python object \'thing\'.\n',
            insertText: 'help($1)$0',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range: range
        },
        {
            label: 'hex',
            kind: monaco.languages.CompletionItemKind.Function,
            documentation: 'Return the hexadecimal representation of an integer.\n\n   >>> hex(12648430)\n   \'0xc0ffee\'',
            insertText: 'hex($1)$0',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range: range
        },
        {
            label: 'id',
            kind: monaco.languages.CompletionItemKind.Function,
            documentation: 'Return the identity of an object.\n\nThis is guaranteed to be unique among simultaneously existing objects.\n(CPython uses the object\'s memory address.)',
            insertText: 'id($1)$0',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range: range
        },
        {
            label: 'int',
            kind: monaco.languages.CompletionItemKind.Function,
            documentation: 'int([x]) -> integer\nint(x, base=10) -> integer\n\nConvert a number or string to an integer, or return 0 if no arguments\nare given.  If x is a number, return x.__int__().  For floating point\nnumbers, this truncates towards zero.\n\nIf x is not a number or if base is given, then x must be a string,\nbytes, or bytearray instance representing an integer literal in the\ngiven base.  The literal can be preceded by '+' or '-' and be surrounded\nby whitespace.  The base defaults to 10.  Valid bases are 0 and 2-36.\nBase 0 means to interpret the base from the string as an integer literal.\n>>> int(\'0b100\', base=0)\n4',
            insertText: 'int($1)$0',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range: range
        },
        {
            label: 'isinstance',
            kind: monaco.languages.CompletionItemKind.Function,
            documentation: 'Return whether an object is an instance of a class or of a subclass thereof.\n\nA tuple, as in ``isinstance(x, (A, B, ...))``, may be given as the target to\ncheck against. This is equivalent to ``isinstance(x, A) or isinstance(x, B)\nor ...`` etc.',
            insertText: 'isinstance($1, $2)$0',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range: range
        },
        {
            label: 'issubclass',
            kind: monaco.languages.CompletionItemKind.Function,
            documentation: 'Return whether \'cls\' is a derived from another class or is the same class.\n\nA tuple, as in ``issubclass(x, (A, B, ...))``, may be given as the target to\ncheck against. This is equivalent to ``issubclass(x, A) or issubclass(x, B)\nor ...`` etc.',
            insertText: 'issubclass($1, $2)$0',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range: range
        },
        {
            label: 'iter',
            kind: monaco.languages.CompletionItemKind.Function,
            documentation: 'iter(iterable) -> iterator\niter(callable, sentinel) -> iterator\n\nGet an iterator from an object.  In the first form, the argument must\nsupply its own iterator, or be a sequence.\nIn the second form, the callable is called until it returns the sentinel.',
            insertText: 'iter($1)$0',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range: range
        },
    ];
}
