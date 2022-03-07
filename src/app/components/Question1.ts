
class Rectangle {

    height: number;
    width: number;

    constructor(height: number, width: number) {
    this.height = height;
    this.width = width;
    }
  
    //  Add the area computation feature - area of a rectangle is the multiplication of its height by its width.
    area(): number {
      return this.width * this.height;
    }
  
    // Handle squares - a square is a particular rectangle where its height and width are equal.
    handleSquare(rect: Rectangle): boolean {
      return rect.width === rect.height;
    }

}

  const rect = new Rectangle(50, 50);

  const area = rect.area();
  console.log(`The value of area is: ${area}`); // 2500

  const firstRect = new Rectangle(5, 5);
  const rectHandle = rect.handleSquare(firstRect);
  console.log(`The value of rectHandle is: ${rectHandle}`); // true

//   for the outputs run:
//   npx ts-node src/app/components/Question1.ts