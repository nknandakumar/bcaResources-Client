 const javaPrograms = [
    {
      id: 1,
      name: "Prog 1",
      code: `
  import java.io.*;
  
  class Jpro1 {
      public static void main(String[] args) throws Exception {
          int a=15 , b=10;
          float c=10.4F , d=15.5F;
          try {
              a=Integer.parseInt(args[0]);
              b=Integer.parseInt(args[1]);
              c=Float.parseFloat(args[2]);
              d=Float.parseFloat(args[3]);
          } catch (Exception e) {
              System.out.println(a+" "+b+" " +c+" "+d);
              add(a,b);
              add(c,d);
          }
      }
      
      public static void add(int a,int b){
          int sum = a+b;
          System.out.println("The Sum Int is: "+sum);
      }
      
      public static void add(float c,float d){
          float sum = c+d;
          System.out.println("The Sum Float is: "+sum);
      }
  }
      `,
      output: `
      Example:
      15 10 10.4 15.5
      The Sum Int is: 25
      The Sum Float is: 25.9
      `,
    },
    {
      id: 2,
      name: "Prog 2",
      code: `
  import java.io.*;
  
  class JAddSub {
      static int num1 = 25, num2 = 5;
      
      public static void add(){
          System.out.println("Addition: " + (num1 + num2));
      }
      
      public static void sub(){
          System.out.println("Subtraction: " + (num1 - num2));
      }
      
      public static void main(String args[]) {
          JAddSub obj1 = new JAddSub();
          mulDiv obj2 = new mulDiv();
          obj1.add();
          obj1.sub();
          obj2.mult();
          obj2.div();
      }
  }
  
  class mulDiv extends JAddSub {
      public static void mult(){
          System.out.println("Multiplication: " + (num1 * num2));
      }
      
      public static void div(){
          System.out.println("Division: " + (num1 / num2));
      }
  }
      `,
      output: `
      Example:
      Addition: 30
      Subtraction: 20
      Multiplication: 125
      Division: 5
      `,
    },
    {
      id: 3,
      name: "Prog 3",
      code: `
  import java.io.*;
  
  class Jprog3 {
      static int num1;
      int num2;
      
      public static void main(String args[]) {
          Jprog3.num1 = 30;
          Jprog3 obj1 = new Jprog3();
          Jprog3 obj2 = new Jprog3();
          obj1.num2 = 44;
          obj2.num2 = 54;
          
          System.out.println("num1 = " + Jprog3.num1 + " obj1.num2 = " + obj1.num2 + " obj2.num2 = " + obj2.num2);
          Jprog3.num1 = 42;
          System.out.println("After changing num1:");
          System.out.println("num1 = " + Jprog3.num1 + " obj1.num2 = " + obj1.num2 + " obj2.num2 = " + obj2.num2);
          obj1.num2 = 56;
          System.out.println("After changing obj1.num2:");
          obj2.num2 = 67;
          System.out.println("After changing obj2.num2:");
      }
  }
      `,
      output: `
      Example:
      num1 = 30 obj1.num2 = 44 obj2.num2 = 54
      After changing num1:
      num1 = 42 obj1.num2 = 44 obj2.num2 = 54
      After changing obj1.num2:
      num1 = 42 obj1.num2 = 56 obj2.num2 = 54
      After changing obj2.num2:
      num1 = 42 obj1.num2 = 56 obj2.num2 = 67
      `,
    },
    {
      id: 4,
      name: "Prog 4",
      code: `
  import java.io.*;
  
  class Jprog5 {
      public static void main(String args[]) throws IOException {
          int n;
          System.out.println("Enter the Number of Students: ");
          DataInputStream in = new DataInputStream(System.in);
          n = Integer.parseInt(in.readLine());
          student arr[] = new student[n];
          for (int i = 0; i < n; i++) {
              System.out.println("Enter the ID, Name, Marks of sub1, sub2, and sub3 for student " + (i + 1));
              arr[i] = new student(0, "");
              arr[i].read(Integer.parseInt(in.readLine()), in.readLine(), Integer.parseInt(in.readLine()), Integer.parseInt(in.readLine()), Integer.parseInt(in.readLine()));
          }
          for (int i = 0; i < n; i++) {
              arr[i].display();
          }
      }
  }
  
  class student {
      public int id, sub1, sub2, sub3;
      public float totalMarks;
      public String name;
  
      student(int id, String name) {
          this.id = id;
          this.name = name;
      }
  
      public void read(int id, String name, int sub1, int sub2, int sub3) {
          this.id = id;
          this.name = name;
          this.sub1 = sub1;
          this.sub2 = sub2;
          this.sub3 = sub3;
          if (this.sub1 < 50 || this.sub2 < 50 || this.sub3 < 50) {
              this.totalMarks = 0.0F;
          } else {
              this.totalMarks = this.sub1 + this.sub2 + this.sub3;
          }
      }
  
      public void display() {
          System.out.println("Student ID = " + id + " Name = " + name);
          System.out.println("Total Marks = " + totalMarks);
      }
  }
      `,
      output: `
      Example:
      Enter the Number of Students: 2
      Enter the ID, Name, Marks of sub1, sub2, and sub3 for student 1
      1
      John
      55
      60
      65
      Enter the ID, Name, Marks of sub1, sub2, and sub3 for student 2
      2
      Jane
      45
      50
      55
  
      Student ID = 1 Name = John
      Total Marks = 180.0
  
      Student ID = 2 Name = Jane
      Total Marks = 0.0
      `,
    },
    {
      id: 5,
      name: "Prog 5",
      code: `
  import java.time.LocalDate;
  import java.time.format.DateTimeFormatter;
  
  class Employee {
      String ename;
      LocalDate doa;
  
      public Employee(String ename, LocalDate doa) {
          this.ename = ename;
          this.doa = doa;
      }
  
      public void display() {
          DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
          System.out.println("Employee Name = " + ename + " Date of Appointment = " + doa.format(formatter));
      }
  }
  
  class Jprog6 {
      public static void main(String args[]) {
          Employee eobj[] = new Employee[8];
          eobj[0] = new Employee("AAA", LocalDate.of(2022, 5, 3));
          eobj[1] = new Employee("ABB", LocalDate.of(2021, 9, 29));
          eobj[2] = new Employee("BBB", LocalDate.of(2017, 8, 15));
          eobj[3] = new Employee("CCC", LocalDate.of(2016, 7, 9));
          eobj[4] = new Employee("DDD", LocalDate.of(2015, 6, 3));
          eobj[5] = new Employee("RRR", LocalDate.of(2014, 5, 1));
          eobj[6] = new Employee("WWW", LocalDate.of(2013, 4, 4));
          eobj[7] = new Employee("QQQ", LocalDate.of(2012, 3, 7));
  
          System.out.println("List of Employees:");
          for (Employee e : eobj) {
              e.display();
          }
  
          // Sorting employees by date of appointment in seniority order
          for (int i = 0; i < eobj.length - 1; i++) {
              for (int j = i + 1; j < eobj.length; j++) {
                  if (eobj[i].doa.isAfter(eobj[j].doa)) {
                      Employee temp = eobj[i];
                      eobj[i] = eobj[j];
                      eobj[j] = temp;
                  }
              }
          }
  
          System.out.println("\nList of Employees in seniority order:");
          for (Employee e : eobj) {
              e.display();
          }
      }
  }
      `,
      output: `
      List of Employees:
      Employee Name = AAA Date of Appointment = 03/05/2022
      Employee Name = ABB Date of Appointment = 29/09/2021
      Employee Name = BBB Date of Appointment = 15/08/2017
      Employee Name = CCC Date of Appointment = 09/07/2016
      Employee Name = DDD Date of Appointment = 03/06/2015
      Employee Name = RRR Date of Appointment = 01/05/2014
      Employee Name = WWW Date of Appointment = 04/04/2013
      Employee Name = QQQ Date of Appointment = 07/03/2012
  
      List of Employees in seniority order:
      Employee Name = QQQ Date of Appointment = 07/03/2012
      Employee Name = WWW Date of Appointment = 04/04/2013
      Employee Name = RRR Date of Appointment = 01/05/2014
      Employee Name = DDD Date of Appointment = 03/06/2015
      Employee Name = CCC Date of Appointment = 09/07/2016
      Employee Name = BBB Date of Appointment = 15/08/2017
      Employee Name = ABB Date of Appointment = 29/09/2021
      Employee Name = AAA Date of Appointment = 03/05/2022
      `,
    },
    {
        id: 6,
        name: "Prog 6",
        code: `
    import java.util.Scanner;
    
    class Jprog7 {
        public static void main(String args[]) {
            Scanner sc = new Scanner(System.in);
            int arr[] = new int[5];
            System.out.println("Enter 5 elements of the array: ");
            for (int i = 0; i < arr.length; i++) {
                arr[i] = sc.nextInt();
            }
            
            // Sum of elements in the array
            int sum = 0;
            for (int i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            System.out.println("Sum of array elements: " + sum);
            
            // Average of elements in the array
            float average = sum / arr.length;
            System.out.println("Average of array elements: " + average);
        }
    }
        `,
        output: `
        Example:
        Enter 5 elements of the array: 
        10
        20
        30
        40
        50
        Sum of array elements: 150
        Average of array elements: 30.0
        `,
      },
      {
        id: 7,
        name: "Prog 7",
        code: `
    import java.util.Scanner;
    
    class Factorial {
        public static int factorial(int n) {
            if (n == 0 || n == 1) {
                return 1;
            } else {
                return n * factorial(n - 1);
            }
        }
    
        public static void main(String args[]) {
            Scanner sc = new Scanner(System.in);
            System.out.println("Enter a number: ");
            int n = sc.nextInt();
            System.out.println("Factorial of " + n + " is: " + factorial(n));
        }
    }
        `,
        output: `
        Example:
        Enter a number: 
        5
        Factorial of 5 is: 120
        `,
      },
      {
        id: 8,
        name: "Prog 8",
        code: `
    import java.util.Scanner;
    
    class Fibonacci {
        public static void main(String args[]) {
            Scanner sc = new Scanner(System.in);
            System.out.println("Enter the number of terms: ");
            int terms = sc.nextInt();
            int first = 0, second = 1, next;
    
            System.out.print("Fibonacci Series: " + first + " " + second);
    
            for (int i = 2; i < terms; i++) {
                next = first + second;
                System.out.print(" " + next);
                first = second;
                second = next;
            }
        }
    }
        `,
        output: `
        Example:
        Enter the number of terms: 
        7
        Fibonacci Series: 0 1 1 2 3 5 8
        `,
      },
      {
        id: 9,
        name: "Prog 9",
        code: `
    import java.util.Scanner;
    
    class PrimeCheck {
        public static boolean isPrime(int num) {
            if (num <= 1) {
                return false;
            }
            for (int i = 2; i <= Math.sqrt(num); i++) {
                if (num % i == 0) {
                    return false;
                }
            }
            return true;
        }
    
        public static void main(String args[]) {
            Scanner sc = new Scanner(System.in);
            System.out.println("Enter a number: ");
            int num = sc.nextInt();
            if (isPrime(num)) {
                System.out.println(num + " is a prime number.");
            } else {
                System.out.println(num + " is not a prime number.");
            }
        }
    }
        `,
        output: `
        Example:
        Enter a number: 
        11
        11 is a prime number.
        `,
      },
      {
        id: 10,
        name: "Prog 10",
        code: `
    import java.util.Scanner;
    
    class Palindrome {
        public static boolean isPalindrome(String str) {
            int left = 0;
            int right = str.length() - 1;
            while (left < right) {
                if (str.charAt(left) != str.charAt(right)) {
                    return false;
                }
                left++;
                right--;
            }
            return true;
        }
    
        public static void main(String args[]) {
            Scanner sc = new Scanner(System.in);
            System.out.println("Enter a string: ");
            String str = sc.nextLine();
            if (isPalindrome(str)) {
                System.out.println(str + " is a palindrome.");
            } else {
                System.out.println(str + " is not a palindrome.");
            }
        }
    }
        `,
        output: `
        Example:
        Enter a string: 
        madam
        madam is a palindrome.
        `,
      },
      {
        id: 11,
        name: "Prog 11",
        code: `
    import java.util.Scanner;
    
    class ReverseNumber {
        public static int reverse(int num) {
            int reversed = 0;
            while (num != 0) {
                int digit = num % 10;
                reversed = reversed * 10 + digit;
                num /= 10;
            }
            return reversed;
        }
    
        public static void main(String args[]) {
            Scanner sc = new Scanner(System.in);
            System.out.println("Enter a number: ");
            int num = sc.nextInt();
            System.out.println("Reversed number is: " + reverse(num));
        }
    }
        `,
        output: `
        Example:
        Enter a number: 
        12345
        Reversed number is: 54321
        `,
      },
      {
        id: 12,
        name: "Prog 12",
        code: `
    import java.util.Scanner;
    
    class ArmstrongNumber {
        public static boolean isArmstrong(int num) {
            int sum = 0, temp = num;
            while (temp != 0) {
                int digit = temp % 10;
                sum += Math.pow(digit, 3);
                temp /= 10;
            }
            return sum == num;
        }
    
        public static void main(String args[]) {
            Scanner sc = new Scanner(System.in);
            System.out.println("Enter a number: ");
            int num = sc.nextInt();
            if (isArmstrong(num)) {
                System.out.println(num + " is an Armstrong number.");
            } else {
                System.out.println(num + " is not an Armstrong number.");
            }
        }
    }
        `,
        output: `
        Example:
        Enter a number: 
        153
        153 is an Armstrong number.
        `,
      },
      {
        id: 13,
        name: "Prog 13",
        code: `
    import java.util.Scanner;
    
    class MatrixAddition {
        public static void main(String args[]) {
            Scanner sc = new Scanner(System.in);
            int row, col;
            System.out.println("Enter the number of rows and columns: ");
            row = sc.nextInt();
            col = sc.nextInt();
            int matrix1[][] = new int[row][col];
            int matrix2[][] = new int[row][col];
            int sum[][] = new int[row][col];
            
            System.out.println("Enter the elements of first matrix:");
            for (int i = 0; i < row; i++) {
                for (int j = 0; j < col; j++) {
                    matrix1[i][j] = sc.nextInt();
                }
            }
    
            System.out.println("Enter the elements of second matrix:");
            for (int i = 0; i < row; i++) {
                for (int j = 0; j < col; j++) {
                    matrix2[i][j] = sc.nextInt();
                }
            }
    
            // Adding two matrices
            for (int i = 0; i < row; i++) {
                for (int j = 0; j < col; j++) {
                    sum[i][j] = matrix1[i][j] + matrix2[i][j];
                }
            }
    
            System.out.println("Sum of the matrices:");
            for (int i = 0; i < row; i++) {
                for (int j = 0; j < col; j++) {
                    System.out.print(sum[i][j] + " ");
                }
                System.out.println();
            }
        }
    }
        `,
        output: `
        Example:
        Enter the number of rows and columns: 
        2
        2
        Enter the elements of first matrix:
        1 2
        3 4
        Enter the elements of second matrix:
        5 6
        7 8
        Sum of the matrices:
        6 8
        10 12
        `,
      },
      {
        id: 14,
        name: "Prog 14",
        code: `
    import java.util.Scanner;
    
    class LinearSearch {
        public static int linearSearch(int[] arr, int key) {
            for (int i = 0; i < arr.length; i++) {
                if (arr[i] == key) {
                    return i;
                }
            }
            return -1;
        }
    
        public static void main(String args[]) {
            Scanner sc = new Scanner(System.in);
            System.out.println("Enter the number of elements: ");
            int n = sc.nextInt();
            int arr[] = new int[n];
            System.out.println("Enter the elements of the array: ");
            for (int i = 0; i < n; i++) {
                arr[i] = sc.nextInt();
            }
            System.out.println("Enter the element to search: ");
            int key = sc.nextInt();
            int result = linearSearch(arr, key);
            if (result != -1) {
                System.out.println("Element found at index: " + result);
            } else {
                System.out.println("Element not found.");
            }
        }
    }
        `,
        output: `
        Example:
        Enter the number of elements: 
        5
        Enter the elements of the array: 
        10 20 30 40 50
        Enter the element to search: 
        30
        Element found at index: 2
        `,
      },
  ];
  
  export  default javaPrograms ;