package arrays;

import java.util.Arrays;

public class ArrayOrdenadoQuadrado {
    public static void main(String[] args) {
        int[] resultado = ordenaQuadrado(-5, 8, 2, -1, 0, 10, 7);

        for (int valor: resultado){
            System.out.print(valor + " ");
        }
    }

    public static int[] ordenaQuadrado(int... numeros) {
        int[] resultado = new int[numeros.length];

        for (int i = 0; i < numeros.length; i++) {
            resultado[i] = numeros[i] * numeros[i];
        }

        Arrays.sort(resultado);

        return resultado;

    }
}
