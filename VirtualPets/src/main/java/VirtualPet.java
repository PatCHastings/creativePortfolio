import java.sql.SQLOutput;
import java.util.ArrayList;

public class VirtualPet {

    private String petName;
    private int hungerLvl;
    private int thirstLvl;
    private int boredomLvl;
    private boolean isAlive;
    private ArrayList<String> shelterPets = new ArrayList<>();
    //constructor
    public VirtualPet(String name, int hungry, int thirsty, int bored, boolean isAlive) {
        this.petName = name;
        this.hungerLvl = 0;
        this.thirstLvl = 0;
        this.boredomLvl = 0;
        this.isAlive = true;

    }

    //getter methods
    public String getPetName() {
        return petName;
    }

    public int getHungerLvl() {
        return hungerLvl;
    }

    public int getThirstLvl() {
        return thirstLvl;
    }

    public int getBoredomLvl() {
        return boredomLvl;
    }

    public boolean getIsAlive() {
        return isAlive;
    }

    //setters
    public void setPetName(String petName) {
        this.petName = petName;
    }

    public void setHungerLvl(int hungerLvl) {
        this.hungerLvl = hungerLvl;
    }

    public void setThirstLvl(int thirstLvl) {
        this.thirstLvl = thirstLvl;
    }

    public void setAlive(boolean alive) {
        isAlive = alive;
    }

    public void setBoredomLvl(int boredomLvl) {
        this.boredomLvl = boredomLvl;


    }

    //METHODS: actions to feed, water, play w/ pet that will update those stats
    public void petsName() {
        System.out.println(petName);
    }

    public void feed() {
         if (hungerLvl > 0) {
            hungerLvl = hungerLvl - 5;
        }
        if (boredomLvl < 20) {
            boredomLvl = boredomLvl + 1;
        }
    }

    public void water() {
        if (thirstLvl > 0) {
            thirstLvl = thirstLvl - 5;
        }
        if (boredomLvl < 20) {
            boredomLvl = boredomLvl + 1;
        }
    }

    public void play() {
            if (boredomLvl > 0) {
            boredomLvl = boredomLvl - 5;
        }
            if (hungerLvl < 20) {
            hungerLvl = hungerLvl + 2;
        }
            if (thirstLvl < 20) {
            thirstLvl = thirstLvl + 2;

        }
    }

    public void isAlive() {
        isAlive = true;

    }


    // Tick methods
    public void hungryPet(int hungry) {
        hungerLvl += hungry;
    }

    public void thirstyPet (int thirsty) {
        thirstLvl += thirsty;
    }

    public void boredPet (int bored) {
        boredomLvl += bored;
    }

    public void status() {
        if (hungerLvl >= 18) {
            System.out.println(petName + " is starving.. You better feed it..");
        }
        if (hungerLvl >= 20) {
            System.out.println(petName + " just died from starvation... GAME OVER..");
            isAlive = false;
        }

    }

    // Tick
    public void tick() {
        hungerLvl = hungerLvl + 1;
        thirstLvl = thirstLvl + 1;
        boredomLvl = boredomLvl + 1;
        if (hungerLvl >= 20 || thirstLvl >= 20) {
            isAlive = !isAlive;
        }
        System.out.println(" Hunger: " + hungerLvl + " Thirst: " + thirstLvl + " Boredom: " + boredomLvl);
    }

    //Test method
    public String parse(int i) {
        return i + "";
    }
}
