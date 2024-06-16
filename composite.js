// Step 2: Create Leaf Class
var TextElement = /** @class */ (function () {
    function TextElement(text) {
        this.text = text;
    }
    TextElement.prototype.print = function () {
        console.log(this.text);
    };
    return TextElement;
}());
// Step 3: Define the Composite Class
var CompositeElement = /** @class */ (function () {
    function CompositeElement(name) {
        this.children = [];
        this.name = name;
    }
    CompositeElement.prototype.print = function () {
        console.log("\n".concat(this.name, ":"));
        this.children.forEach(function (child) { return child.print(); });
    };
    CompositeElement.prototype.add = function (child) {
        this.children.push(child);
    };
    CompositeElement.prototype.remove = function (child) {
        var index = this.children.indexOf(child);
        if (index !== -1) {
            this.children.splice(index, 1);
        }
    };
    return CompositeElement;
}());
function clientCode() {
    // Create leaf elements
    var simpleText1 = new TextElement("Hello");
    var simpleText2 = new TextElement("World");
    // Create composites
    var paragraph = new CompositeElement("Paragraph");
    paragraph.add(simpleText1);
    paragraph.add(simpleText2);
    // Create higher level structure
    var document = new CompositeElement("Document");
    document.add(paragraph);
    document.add(new TextElement("End of document."));
    // Print structure
    document.print();
}
clientCode();
//# sourceMappingURL=composite.js.map