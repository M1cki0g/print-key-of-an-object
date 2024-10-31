 function personne(n, a, v) {
        this.age = a;
        this.nom = n;
        this.ville = v;
      }

      let P1 = new personne("Yassine", 30, "NYC");
      
      console.log(Object.values(P1));
