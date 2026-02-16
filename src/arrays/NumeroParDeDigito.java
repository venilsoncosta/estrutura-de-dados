package arrays;

public class NumeroParDeDigito {
    public static void main(String[] args) {
        System.out.println(encontraParesDigitos(12, 4, 621, 8991, 2, 121));
    }

    public static int encontraParesDigitos(int... numeros) {
        int contaPares = 0;

        for(int valor: numeros) {
            int numeroDigitos = String.valueOf(valor).length();
            if (numeroDigitos % 2 == 0){
                contaPares++;
            }
        }

        return contaPares;
    }
}
