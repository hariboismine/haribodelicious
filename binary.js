public class MyClass {
    public static void main(String args[]) {
System.out.println("융합과학 디지털신호 변환 자바스크립트로 구현해보기");

int num = 84;
System.out.println("넣어준 값 : " + num);

String a2 = Integer.toBinaryString(num);
System.out.println("2 진수 : " + a2);

int a2_2 = Integer.parseInt(a2, 2);
System.out.println("변환한 2 진수를 10진수로 변환 : " + a2_2);
    }
}
