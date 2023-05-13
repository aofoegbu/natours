// program that takes a 3x3 matrix as input and prints the sum of each column


#include <stdio.h>

#define MAX_ROW 3
#define MAX_COL 3

void printMatrix(int rows, int cols, int matrix[][cols]);
void printSumOfColumns(int rows, int cols, int matrix[][cols]);

int main() {
    int matrix[MAX_ROW][MAX_COL];

    printf("Enter the elements of the %d x %d matrix:\n", MAX_ROW, MAX_COL);
    for (int i = 0; i < MAX_ROW; i++) {
        for (int j = 0; j < MAX_COL; j++) {
            scanf("%d", &matrix[i][j]);
        }
    }

    printf("\n");
    printMatrix(MAX_ROW, MAX_COL, matrix);
    printSumOfColumns(MAX_ROW, MAX_COL, matrix);

    return 0;
}

// Function to print the matrix
void printMatrix(int rows, int cols, int matrix[][cols]) {
    printf("Matrix:\n");
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            printf("%d ", matrix[i][j]);
        }
        printf("\n");
    }
    printf("\n");
}

// Function to calculate and print the sum of each column
void printSumOfColumns(int rows, int cols, int matrix[][cols]) {
    int colSum[cols];

    for (int j = 0; j < cols; j++) {
        for (int i = 0; i < rows; i++) {
            colSum[j] += matrix[i][j];
        }
    }

    printf("Sum of each column:\n");
    for (int j = 0; j < cols; j++) {
        printf("Column %d: %d\n", j + 1, colSum[j]);
    }
    printf("\n");
}
