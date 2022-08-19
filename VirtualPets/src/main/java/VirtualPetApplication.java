import java.util.ArrayList;
import java.util.Scanner;

public class VirtualPetApplication {

    public static void main(String[] args) {
        //Interact with a VirtualPet object in this method
        ArrayList<VirtualPet> shelterPets = new ArrayList<>();
        shelterPets.add("Golbez");
        shelterPets.add("Robo");
        shelterPets.add("Citan");
        shelterPets.add("Sabin");

        VirtualPetApplication newGame = new VirtualPetApplication();
        // Call gameLoop method
        newGame.gameLoop();


    }


    public void gameLoop() {

        Scanner input = new Scanner(System.in);
        boolean dead = false;
        boolean isAlive = true;

        System.out.println("Welcome to Virtual Pet Andventure! Enter the name of your new pet:");
        String petName = input.nextLine();
        VirtualPet pet1 = new VirtualPet(petName, 0, 0, 0, true);

        // Change to a Do While loop? so i can exit once pet dies
        do {
            System.out.println("What do you want to do with your pet? Type: feed | water | play");
            String prompt = input.nextLine();

            if (prompt.equalsIgnoreCase("feed")) {
                pet1.feed();
                pet1.tick();
                pet1.status();
                if(isAlive == false){
                    break;
                }
            } else if (prompt.equalsIgnoreCase("water")) {
                pet1.water();
                pet1.tick();
                pet1.status();
                if(isAlive == false){
                    break;
                }
            } else if (prompt.equalsIgnoreCase("play")) {
                pet1.play();
                pet1.tick();
                pet1.status();
                if(isAlive == false){
                    break;
                }
            }  // maybe create another else if status reaches certain levels
            else {
                break;
            }
        } while (isAlive == true);

        }

    }




