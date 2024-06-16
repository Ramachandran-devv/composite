/**
 * The base Component class declares common operations for both simple and
 * complex objects of a hierarchical structure.
 */
interface DocumentComponent {
    print(): void;
}
// Step 2: Create Leaf Class

class TextElement implements DocumentComponent {
    private text: string;

    constructor(text: string) {
        this.text = text;
    }

    print(): void {
        console.log(this.text);
    }
}
// Step 3: Define the Composite Class

class CompositeElement implements DocumentComponent {
    private children: DocumentComponent[] = [];
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    print(): void {
        console.log(`\n${this.name}:`);
        this.children.forEach(child => child.print());
    }

    add(child: DocumentComponent): void {
        this.children.push(child);
    }

    remove(child: DocumentComponent): void {
        const index = this.children.indexOf(child);
        if (index !== -1) {
            this.children.splice(index, 1);
        }
    }
}


function clientCode() {
    // Create leaf elements
    const simpleText1 = new TextElement("Hello");
    const simpleText2 = new TextElement("World");

    // Create composites
    const paragraph = new CompositeElement("Paragraph");
    paragraph.add(simpleText1);
    paragraph.add(simpleText2);

    // Create higher level structure
    const document = new CompositeElement("Document");
    document.add(paragraph);
    document.add(new TextElement("End of document."));

    // Print structure
    document.print();
}

clientCode();
