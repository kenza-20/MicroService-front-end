import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
})
export class RegisterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}


// const signupUser = async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//       // 🔍 Validation des champs
//       if (!name  || !email || !password ) {
//           throw new Error('All fields must be filled');
//       }
//       if (!validator.isEmail(email)) {
//           throw new Error('Email not valid');
//       }
//       if (!validator.isStrongPassword(password)) {
//           throw new Error('Password must be at least 8 characters long, with uppercase, lowercase, number, and symbol');
//       }

//       // 🔍 Vérification si l'email existe déjà
//       const exists = await User.findOne({ email });
//       if (exists) {
//           throw new Error('Email already in use');
//       }

//       // 🔑 Hash du mot de passe
//       const salt = await bcrypt.genSalt(10);
//       const hash = await bcrypt.hash(password, salt);
//       const role = 'employe'; 


//       // ✅ Création de l'utilisateur

//       const user = await User.create({ name, email, password: hash, role });

//       // 🎟 Génération du Token
//       const token = createToken(user._id, user.role);

//       res.status(200).json({ name, email, role, token, userId: user._id});

//   } catch (error) {
//       res.status(400).json({ error: error.message });
//   }
// };