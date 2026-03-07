# 🩺 Rule-Based Symptom Checker

## 📌 Project Overview

This project is a **rule-based symptom checker** designed as a personal academic project to demonstrate the application of logical decision-making, data mapping, and ethical considerations in health-related software systems.

The system allows users to select symptoms through a simple user interface and receive **possible health condition suggestions** based on predefined clinical rules. The project does **not** perform medical diagnosis and is intended strictly for **educational and decision-support demonstration purposes**.

This project was developed to bridge foundational knowledge in **Artificial Intelligence** with the principles of **Medical / Health Informatics**, emphasizing transparency, explainability, and responsible health data usage.

---

## 🎯 Motivation

Imagine being able to **accurately predict** potential illnesses from **early symptoms** from the comfort of your home. This would not only improve **personal health awareness** but also help in making **informed decisions**, potentially **saving valuable time** and reducing **unnecessary hospital visits** for minor concerns.

This project was inspried by the desire to create an **accessible, intelligent tool** that **empowers individuals** to better undetstand their health, while always emphasizing its role as a **supportive guide** and the critical importance of **consulting a healthcare professional** for an accurate duagnosis.

---

## 🧠 System Design & Logic

### User Flow

1. User selects symptoms via a checkbox-based form
2. Selected symptoms are collected and normalized
3. The system compares user symptoms against predefined rules
4. Possible conditions are suggested based on symptom overlap
5. Informational descriptions and guidance are displayed

### Rule-Based Decision Logic

Each condition is associated with a predefined set of symptoms. A condition is suggested if the number of matching symptoms exceeds a defined threshold.

This approach simulates **clinical rule mapping** while maintaining transparency in how decisions are made.

---

## 🗂️ Data Structure

Symptom–condition relationships are stored in a structured JSON file.

## Data Sources

Symptom information was referenced from:

- Mayo Clinic
- NHS
- CDC

This structure allows:

* Easy modification and expansion
* Clear separation between logic and data
* Explainable mapping between symptoms and outcomes

---

## 🖥️ User Interface

* Simple and clean design
* Checkbox-based symptom input to reduce ambiguity
* Clear output section displaying suggested conditions
* Health-oriented color scheme for readability and accessibility

The UI design prioritizes **clarity and usability**, especially for non-technical users.

---

## ⚙️ Technologies Used

* **JavaScript** – rule-based decision logic
* **HTML** – user input forms
* **CSS** – layout and visual clarity
* **JSON** – structured health data storage

---

## ⚠️ Ethical Disclaimer

> This application is for educational purposes only.
> It does not provide medical diagnosis, treatment, or professional medical advice.
> Users should always consult qualified healthcare professionals for medical concerns.

Ethical responsibility and transparency are core considerations in the design of this project.

---

## 📈 Future Improvements

* Severity level assessment (mild / moderate / severe)
* Confidence or match-percentage scoring
* Multi-language support (e.g., English / Thai)
* Backend implementation using Python (Flask)
* Explainable reasoning output ("Why this condition was suggested")

---

## 📚 Academic Relevance

This project demonstrates key competencies relevant to **Medical Informatics**:

* Clinical rule mapping
* Explainable decision-support systems
* Ethical health data handling
* Human-centered interface design

It serves as a foundational exploration of how computational logic can support healthcare-related applications responsibly.

---

## 👤 Author

Patthamon Charaschimpleekul

---

## 📄 License

This project is released for educational and non-commercial use.
