import java.util.ArrayList;

public class VirtualPetShelter {

    // instance variables
    private ArrayList<VirtualPet> shelterPets;
    //constructor
    public VirtualPetShelter(ArrayList<VirtualPet> shelterPets) {
        this.shelterPets = shelterPets;
    }
    ArrayList<VirtualPet> shelterPets = new ArrayList<>();
    //getter
    public ArrayList<VirtualPet> getPetShelter() {
        return shelterPets;
    }

    // method to add pets?
    public VirtualPet addShelterPets(VirtualPet addPet) {
        return shelterPets.add(addPet);
    }
}
