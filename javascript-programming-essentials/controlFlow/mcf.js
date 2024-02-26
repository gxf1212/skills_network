// let person = "Employee";
// let person = "Enrolled Member";
// let person = "Subscriber"
let person = 'lalala'

let result = document.getElementById("authorization result");
switch (person) {
    case "Employee":
        result.textContent = 'You are authorized to have access to "Dietary Services"';
        break;
    case "Enrolled Member":
        result.textContent = 'You are authorized to have access to "Dietary Services" and one-on-one interaction with a dietician.';
        break;
    case "Subscriber":
        result.textContent = 'You are authorized to have partial access to facilitate "Dietary Services" only.';
        break;
    case "Non-Subscriber":
        result.textContent = 'Enroll or at least subscribe first to avail this facility.';
        break
    default:
        result.textContent = 'Unknown status.'
}

