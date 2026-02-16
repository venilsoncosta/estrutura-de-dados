package arrays;

public class MaiorImparEPar {
    public static void main(String[] args) {
        System.out.println(maiorPar(1, 342, 7653, 86, 2534, 64, 2357, 683, 41234));
    }

    public static int maiorPar(int... numeros) {
        int maiorPar = Integer.MIN_VALUE;

        for (int valor: numeros) {
            if (valor % 2 == 0 && valor > maiorPar) {
                maiorPar = valor;
            }
        }

        return maiorPar;
    }
}
