public class CatExample {

    public static void main(String[] args) {
        Cat cat1 = new Cat("Mittens", "brown", 4, 9);
        Cat cat2 = new Cat("Vlad", "black", 500, 1);
        Cat cat3 = new Cat("Thanos", "purple", 40, 7);
        System.out.println("the cats name is " + cat1.getName());
        System.out.println("the cats name is " + cat2.getName());
        System.out.println("the cats name is " + cat3.getName());
    }
}
