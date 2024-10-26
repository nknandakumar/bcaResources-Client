 const Cprograms = [
    {
      id: 1,
      name: "BOX-1",
      code: `
#include <stdio.h>
#include<conio.h>
  
int gcd(int m, int n){
 if(n == 0) 
  return m;
 if(m < n)
  return gcd(n, m);
 return gcd(n, m % n);
}
  
  void main(){
      int m, n, res;
      clrscr();
      printf("Enter the value for M and N: ");
      scanf("%d %d", &m, &n);
      res = gcd(m, n);
      printf("GCD(%d, %d) = %d", m, n, res);
      getch();
  }
      `,
      output: `GCD(12, 15) = 3`
    },
    {
      id: 2,
      name: "BOX-2",
      code: `
  #include <stdio.h>
  
  long factorial(int n);
  
  void main() {
      int n, i, c;
      clrscr();
      printf("Enter the number of rows in Pascal's triangle: ");
      scanf("%d", &n);
  
      for (i = 0; i < n; i++) {
          for (c = 0; c < n - i - 1; c++) {
              printf(" ");
          }
  
          for (c = 0; c <= i; c++) {
              printf("%ld ", factorial(i) / (factorial(c) * factorial(i - c)));
          }
  
          printf("\n");
      }
  
      getch();
  }
  
  long factorial(int n) {
      int c;
      long result = 1;
      for (c = 1; c <= n; c++) {
          result *= c;
      }
      return result;
  }
      `,
      output: `Pascal's triangle displayed based on user input rows`
    },
    {
      id: 3,
      name: "BOX-3",
      code: `
  #include <stdio.h>
  #include<conio.h>
  
  int fib(int n){
      if(n == 0)
          return 0;
      if(n == 1)
          return 1;
      return fib(n - 1) + fib(n - 2);
  }
  
  void main(){
      int n, i;
      clrscr();
      printf("Enter the Number Sequence in Fibonacci: \n");
      scanf("%d", &n);
      printf("%d Fibonacci Numbers are: ", n);
      for(i = 0; i < n; i++)
          printf("%d ", fib(i));
      getch();
  }
      `,
      output: `First N Fibonacci numbers displayed`
    },
    {
      id: 4,
      name: "BOX-4",
      code: `
  #include<stdio.h>
  #include<conio.h>
  
  void tower(int n, char source, char temp, char dest){
      if(n == 1){
          printf("Move disc %d from %c to %c", n, source, dest);
          return;
      }
      tower(n - 1, source, dest, temp);
      printf("Move disc %d from %c to %c\n", n, source, dest);
      tower(n - 1, temp, source, dest);
  }
  
  void main(){
      int n;
      clrscr();
      printf("Enter the number of Discs: ");
      scanf("%d", &n);
      tower(n, 'A', 'B', 'C');
      getch();
  }
      `,
      output: `Steps to move discs for Tower of Hanoi problem`
    },
    {
      id: 5,
      name: "BOX-5",
      code: `
  #include <stdio.h>
  #include <stdlib.h>
  #include <conio.h>
  
  int main() {
      int *ptr = NULL;
      int i, len = 0, small, large;
      clrscr();
      printf("Enter the size of the array: ");
      scanf("%d", &len);
  
      ptr = (int*)malloc(len * sizeof(int));
  
      printf("Enter the elements: ");
      for (i = 0; i < len; ++i) {
          scanf("%d", &ptr[i]);
      }
  
      large = small = ptr[0];
  
      for (i = 0; i < len; ++i) {
          if (ptr[i] > large) {
              large = ptr[i];
          }
          if (ptr[i] < small) {
              small = ptr[i];
          }
      }
  
      printf("Largest number = %d\n", large);
      printf("Smallest number = %d\n", small);
  
      free(ptr);
      getch();
      return 0;
  }
      `,
      output: `Displays the largest and smallest numbers in the array`
    },
    {
      id: 6,
      name: "BOX-6",
      code: `
  #include <stdio.h>
  #include<conio.h>
  #include<string.h>
  
  void main(){
      char name[10][20], tname[10][20], temp[20];
      int n, i, j;
      clrscr();
      printf("Enter the Number of cities: ");
      scanf("%d", &n);
      printf("Enter the City Names: \n");
      for(i = 0; i < n; i++){
          scanf("%s", name[i]);
          strcpy(tname[i], name[i]);
      }
      for(i = 0; i < n - 1; i++){
          for(j = i + 1; j < n; j++){
              if(strcmp(name[i], name[j]) > 0){
                  strcpy(temp, name[i]);
                  strcpy(name[i], name[j]);
                  strcpy(name[j], temp);
              }
          }
      }
      printf("Sorted City Names: \n");
      for(i = 0; i < n; i++){
          printf("%s\n", name[i]);
      }
      getch();
  }
      `,
      output: `Sorted list of city names`
    },
    {
      id: 7,
      name: "BOX-7",
      code: `
  #include<stdio.h>
  #include<conio.h>
  
  void main(){
      int n, i, j, pos, a[20], temp;
      clrscr();
      printf("Enter the Number of items: \n");
      scanf("%d", &n);
      printf("Enter the items: \n");
      for(i = 0; i < n; i++){
          scanf("%d", &a[i]);
      }
      for(i = 0; i < n - 1; i++){
          pos = i;
          for(j = i + 1; j < n; j++){
              if(a[j] < a[pos])
                  pos = j;
          }
          temp = a[pos];
          a[pos] = a[i];
          a[i] = temp;
      }
      printf("Sorted Elements: \n");
      for(i = 0; i < n; i++){
          printf("%d\n", a[i]);
      }
      getch();
  }
      `,
      output: `Selection sort results displayed`
    },
    {
      id: 8,
      name: "BOX-8",
      code: `
  #include <stdio.h>
  #include<conio.h>
  
  void insertion(int n, int a[]) {
      int i, j, item;
      for (i = 1; i < n; i++) {
          item = a[i];
          j = i - 1;
          while (j >= 0 && item < a[j]) {
              a[j + 1] = a[j];
              j = j - 1;
          }
          a[j + 1] = item;
      }
  }
  
  void main() {
      int i, n, a[20];
      clrscr();
      printf("Enter the size of array: \n");
      scanf("%d", &n);
      printf("Enter %d elements: \n", n);
      for (i = 0; i < n; i++) {
          scanf("%d", &a[i]);
      }
      insertion(n, a);
      printf("Sorted elements are: \n");
      for (i = 0; i < n; i++) {
          printf("%d\n", a[i]);
      }
      getch();
  }
      `,
      output: `Array sorted using insertion sort`
    },
    {
      id: 9,
      name: "BOX-9",
      code: `
  #include <stdio.h>
  
  int partition(int a[], int low, int high) {
      int i, j, key, temp;
      key = a[low];
      i = low + 1;
      j = high;
  
      while (1) {
          while (i <= high && a[i] <= key)
              i++;
          while (j >= low && a[j] > key)
              j--;
  
          if (i < j) {
              temp = a[i];
              a[i] = a[j];
              a[j] = temp;
          } else {
              temp = a[low];
              a[low] = a[j];
              a[j] = temp;
              return j;
          }
      }
  }
  
  void quick_sort(int a[], int low, int high) {
      int j;
      if (low < high) {
          j = partition(a, low, high);
          quick_sort(a, low, j - 1);
          quick_sort(a, j + 1, high);
      }
  }
  
  int main() {
      int n, i, a[20];
      clrscr();
      printf("Enter the size of the array: ");
      scanf("%d", &n);
      printf("Enter %d elements: ", n);
      for (i = 0; i < n; i++) {
          scanf("%d", &a[i]);
      }
      quick_sort(a, 0, n - 1);
      printf("Sorted elements are: ");
      for (i = 0; i < n; i++) {
          printf("%d ", a[i]);
      }
      getch();
      return 0;
  }
      `,
      output: `Array sorted using quick sort`
    },
    {
      id: 10,
      name: "BOX-10",
      code: `
  #include <stdio.h>
  #include<conio.h>
  
  void merge(int arr[], int l, int m, int r) {
      int i, j, k;
      int n1 = m - l + 1;
      int n2 = r - m;
  
      int L[n1], R[n2];
  
      for (i = 0; i < n1; i++)
          L[i] = arr[l + i];
      for (j = 0; j < n2; j++)
          R[j] = arr[m + 1 + j];
  
      i = 0;
      j = 0;
      k = l;
      while (i < n1 && j < n2) {
          if (L[i] <= R[j]) {
              arr[k] = L[i];
              i++;
          } else {
              arr[k] = R[j];
              j++;
          }
          k++;
      }
  
      while (i < n1) {
          arr[k] = L[i];
          i++;
          k++;
      }
  
      while (j < n2) {
          arr[k] = R[j];
          j++;
          k++;
      }
  }
  
  void mergeSort(int arr[], int l, int r) {
      if (l < r) {
          int m = l + (r - l) / 2;
          mergeSort(arr, l, m);
          mergeSort(arr, m + 1, r);
          merge(arr, l, m, r);
      }
  }
  
  void main() {
      int arr[20], n, i;
      clrscr();
      printf("Enter number of elements in the array: ");
      scanf("%d", &n);
      printf("Enter %d elements: ", n);
      for (i = 0; i < n; i++) {
          scanf("%d", &arr[i]);
      }
  
      mergeSort(arr, 0, n - 1);
  
      printf("Sorted array: ");
      for (i = 0; i < n; i++) {
          printf("%d ", arr[i]);
      }
      getch();
  }
      `,
      output: `Array sorted using merge sort`
    },
    {
        id: 11,
        name: "BOX-11",
        code: `
    #include <stdio.h>
    #include <conio.h>
    
    void bubbleSort(int a[], int n) {
        int i, j, temp;
        for (i = 0; i < n-1; i++) {
            for (j = 0; j < n-i-1; j++) {
                if (a[j] > a[j+1]) {
                    temp = a[j];
                    a[j] = a[j+1];
                    a[j+1] = temp;
                }
            }
        }
    }
    
    void main() {
        int a[20], n, i;
        clrscr();
        printf("Enter the size of the array: ");
        scanf("%d", &n);
        printf("Enter the array elements: \n");
        for (i = 0; i < n; i++) {
            scanf("%d", &a[i]);
        }
    
        bubbleSort(a, n);
    
        printf("Sorted array: ");
        for (i = 0; i < n; i++) {
            printf("%d ", a[i]);
        }
        getch();
    }
        `,
        output: `Array sorted using bubble sort`
      },
      {
        id: 12,
        name: "BOX-12",
        code: `
    #include <stdio.h>
    
    void swap(int *x, int *y) {
        int temp;
        temp = *x;
        *x = *y;
        *y = temp;
    }
    
    void main() {
        int a, b;
        clrscr();
        printf("Enter two numbers to swap: ");
        scanf("%d %d", &a, &b);
        printf("Before swap: a = %d, b = %d\n", a, b);
    
        swap(&a, &b);
    
        printf("After swap: a = %d, b = %d\n", a, b);
        getch();
    }
        `,
        output: `Swaps the values of two numbers`
      },
      {
        id: 13,
        name: "BOX-13",
        code: `
    #include <stdio.h>
    
    int factorial(int n) {
        if (n == 0)
            return 1;
        else
            return n * factorial(n - 1);
    }
    
    void main() {
        int n;
        clrscr();
        printf("Enter a number: ");
        scanf("%d", &n);
        printf("Factorial of %d is %d", n, factorial(n));
        getch();
    }
        `,
        output: `Factorial of the input number`
      },
      {
        id: 14,
        name: "BOX-14",
        code: `
    #include <stdio.h>
    
    void reverseString(char str[]) {
        int n = 0;
        while (str[n] != '\\0') {
            n++;
        }
        printf("Reversed string: ");
        for (int i = n - 1; i >= 0; i--) {
            printf("%c", str[i]);
        }
    }
    
    void main() {
        char str[100];
        clrscr();
        printf("Enter a string: ");
        gets(str);
        reverseString(str);
        getch();
    }
        `,
        output: `Reversed version of the input string`
      },
      {
        id: 15,
        name: "BOX-15",
        code: `
    #include <stdio.h>
    
    void primeFactors(int n) {
        int i;
        while (n % 2 == 0) {
            printf("%d ", 2);
            n = n / 2;
        }
    
        for (i = 3; i * i <= n; i = i + 2) {
            while (n % i == 0) {
                printf("%d ", i);
                n = n / i;
            }
        }
    
        if (n > 2)
            printf("%d ", n);
    }
    
    void main() {
        int n;
        clrscr();
        printf("Enter a number: ");
        scanf("%d", &n);
        printf("Prime factors of %d are: ", n);
        primeFactors(n);
        getch();
    }
        `,
        output: `Prime factors of the input number`
      },
      {
        id: 16,
        name: "BOX-16",
        code: `
    #include <stdio.h>
    #include <conio.h>
    
    int isPalindrome(char str[]) {
        int l = 0;
        int h = strlen(str) - 1;
        while (h > l) {
            if (str[l++] != str[h--]) {
                return 0;
            }
        }
        return 1;
    }
    
    void main() {
        char str[100];
        clrscr();
        printf("Enter a string: ");
        gets(str);
        if (isPalindrome(str)) {
            printf("The string is a palindrome.");
        } else {
            printf("The string is not a palindrome.");
        }
        getch();
    }
        `,
        output: `Checks if the input string is a palindrome`
      },
      {
        id: 17,
        name: "BOX-17",
        code: `
    #include <stdio.h>
    
    int binarySearch(int arr[], int l, int r, int x) {
        if (r >= l) {
            int mid = l + (r - l) / 2;
            if (arr[mid] == x)
                return mid;
            if (arr[mid] > x)
                return binarySearch(arr, l, mid - 1, x);
            return binarySearch(arr, mid + 1, r, x);
        }
        return -1;
    }
    
    void main() {
        int arr[100], n, x, result;
        clrscr();
        printf("Enter number of elements: ");
        scanf("%d", &n);
        printf("Enter the elements in sorted order: ");
        for (int i = 0; i < n; i++) {
            scanf("%d", &arr[i]);
        }
        printf("Enter the element to search: ");
        scanf("%d", &x);
    
        result = binarySearch(arr, 0, n - 1, x);
    
        if (result == -1)
            printf("Element not found");
        else
            printf("Element found at index %d", result);
        getch();
    }
        `,
        output: `Performs binary search and displays index if found`
      }
    
    
  ];

  export default Cprograms;
  