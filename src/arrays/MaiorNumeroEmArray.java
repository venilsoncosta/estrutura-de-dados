package arrays;

public class MaiorNumeroEmArray {
    public static void main(String[] args) {
        System.out.println(maiorValor(1, 2, 3, 4, 5, 6, 734, 8, 98));
    }

    public static int maiorValor(int... numeros) {
        int maiorNumero = -1;

        for (int valor: numeros) {
            if (valor > maiorNumero){
                maiorNumero = valor;
            }
        }

        return maiorNumero;
    }
}
