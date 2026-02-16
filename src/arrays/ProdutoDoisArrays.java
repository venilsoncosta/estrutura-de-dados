package arrays;

public class ProdutoDoisArrays {
    public static void main(String[] args) {
        int[] nums1 = {3, 2, 4, 1, 0, 3, 7};
        int[] nums2 = {1, 2, 5, 0, 2, 0, 2};

        System.out.println(produtoEscalar(nums1, nums2));
    }

    public static int produtoEscalar(int[] array1, int[] array2) {
        var produto = 0;

        for (int i = 0; i < array1.length; i++) {
            produto += array1[i] * array2[i];
        }

        return produto;
    }
}
