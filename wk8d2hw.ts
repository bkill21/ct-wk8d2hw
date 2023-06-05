// Design a flexible OOP system to describe characters in a RPG game

// There are 4 Unique Characters which use Different Types of Attacking mechanisms and Defending mechanisms.

// Orges - fights with club and defends with shield

// Peons - fights with club and defends with shield

// Knights - fights with a Sword and defends with Armor

// Archer - fights with Bow and Arrow and has only is tunic to protect them

// All Characters can collect gold and this will always be the same for every new type of character

// At the end of this each character should be able to attack and defend and collect gold. If needed any character should be able to change his fighting style, say if a knight losing his sword, but finds a club he should be able to change his fighting mechanism to use the club

interface Attacker {
  attack(): void;
}

interface Defender {
  defend(): void;
}

abstract class Character implements Attacker, Defender {
  protected gold: number;

  constructor() {
    this.gold = 0;
  }

  collectGold(amount: number): void {
    this.gold += amount;
    console.log(`Collected ${amount} gold. Total gold: ${this.gold}`);
  }

  abstract attack(): void;

  abstract defend(): void;
}

class Ogre extends Character {
  private weapon = "Club";
  private armor = "Shield";

  attack(): void {
    console.log(`Ogre attacked with a ${this.weapon}`);
  }

  defend(): void {
    console.log(`Ogre defended with ${this.armor}`);
  }

  changeWeapon(newWeapon: string): void {
    this.weapon = newWeapon;
    console.log(`Ogre now wields a ${this.weapon}`);
  }

  changeArmor(newArmor: string): void {
    this.armor = newArmor;
    console.log(`Ogre now wears a ${this.armor}`);
  }
}

class Knight extends Character {
  private weapon = "Sword";
  private armor = "Armor";

  attack(): void {
    console.log(`Knight attacked with a ${this.weapon}`);
  }

  defend(): void {
    console.log(`Knight defended with ${this.armor}`);
  }

  changeWeapon(newWeapon: string): void {
    this.weapon = newWeapon;
    console.log(`Knight now wields a ${this.weapon}`);
  }

  changeArmor(newArmor: string): void {
    this.armor = newArmor;
    console.log(`Knight now wears a ${this.armor}`);
  }
}

class Archer extends Character {
  private weapon = "Bow and Arrow";
  private armor = "Tunic";

  attack(): void {
    console.log(`Archer attacked with a ${this.weapon}`);
  }

  defend(): void {
    console.log(`Archer defended with ${this.armor}`);
  }

  changeWeapon(newWeapon: string): void {
    this.weapon = newWeapon;
    console.log(`Archer now wields a ${this.weapon}`);
  }

  changeArmor(newArmor: string): void {
    this.armor = newArmor;
    console.log(`Archer now wears a ${this.armor}`);
  }
}

const ogre = new Ogre();
ogre.attack();
ogre.defend();
ogre.collectGold(10);
ogre.changeWeapon("Mace");
ogre.changeArmor("Helmet");

const knight = new Knight();
knight.attack();
knight.defend();
knight.collectGold(5);
knight.changeWeapon("Club");
knight.changeArmor("Chainmail");

const archer = new Archer();
archer.attack();
archer.defend();
archer.collectGold(3);
archer.changeWeapon("Crossbow");
archer.changeArmor("Leather Jerkin");
