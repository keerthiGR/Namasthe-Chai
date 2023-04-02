public class Car {
    private String make;
    private String model;
    private int year;
    private String engine;
    private String transmission;
    private int numberOfWheels;
    private Person owner;

    public Car(String make, String model, int year, String engine, String transmission, int numberOfWheels, Person owner) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.engine = engine;
        this.transmission = transmission;
        this.numberOfWheels = numberOfWheels;
        this.owner = owner;
    }

    public void startEngine() {
        System.out.println("Starting engine...");
        // implementation to start engine
    }

    public void shiftGear() {
        System.out.println("Shifting gear...");
    }

    public void drive() {
        System.out.println("Driving...");
    }

    public void stop() {
        System.out.println("Stopping car...");
    }

    public void transferOwnership(Person newOwner) {
        System.out.println("Transferring ownership...");
        this.owner = newOwner;
    }
}