package selectionSort;

public class SelectionSort {
    public static void main(String[] args) {
        int[] valores = {34, 78, 9, 2, 34, 1, 11, 4, 89, -1};
        System.out.println("Array antes da ordenação: ");
        for (int valor : valores) {
            System.out.print(valor + " ");
        }
        System.out.println("\n-----------------------------");
        System.out.println("Array após a ordenação: ");
        selectionSort(valores);
        for (int valor : valores) {
            System.out.print(valor + " ");
        }
    }

    public static void selectionSort(int[] valores){
        for (int i = 0; i < valores.length; i++){

            int valor_menor = i;
            for(int j = i + 1; j < valores.length; j++){
                if (valores[j] < valores[valor_menor])
                    valor_menor = j;
            }

            int aux = valores[i];
            valores[i] = valores[valor_menor];
            valores[valor_menor] = aux;
        }
    }
}
