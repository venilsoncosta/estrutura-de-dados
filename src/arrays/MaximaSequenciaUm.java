package arrays;

public class MaximaSequenciaUm {
    public static void main(String[] args) {
        System.out.println(encontraMaiorSequenciaDeUm(1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1));
    }

    public static int encontraMaiorSequenciaDeUm(int... numeros) {
        int maximoDeUns = 0;
        int contaUns = 0;

        for (int valor: numeros){
            if (valor == 1){
                contaUns++;
            }

            if (valor != 1 && contaUns > 0){
                if (contaUns > maximoDeUns) {
                    maximoDeUns = contaUns;
                }
                contaUns = 0;
            }
        }

        if (contaUns > maximoDeUns) {
            maximoDeUns = contaUns;
        }

        return maximoDeUns;
    }
}
