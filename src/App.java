public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("Hello, World!");
        var texto = "abc123def456";
        var resultado = removedigito(texto);
        System.out.println("Resultado: " + resultado);
    }

    public static String removedigito(String texto){
        var regex = "\\D";
        return texto.replaceAll(regex, "");
    }
}
