// TC: O(numRows^2)
// SC: O(numRows^2)

/* Explain: 
Using the first loop to run from 2 to numRows. 
Using the loop 2 to add middle items for each row (based on the previous row).
*/
function generate(numRows: number): number[][] {
    if (numRows === 0) return [];

    const result: number[][] = [[1]];

    for (let i = 1; i < numRows; i++) {
        const row: number[] = [1]; // init new row with the first item

        for (let j = 1; j < i; j++) {
            row.push(result[i - 1][j - 1] + result[i - 1][j]);
        }

        row.push(1); //add final item to the row
        result.push(row);
    }

    return result;
}
