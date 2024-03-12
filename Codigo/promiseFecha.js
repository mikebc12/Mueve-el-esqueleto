// Function to check the selected date against a certain period
const checkSelectedDate = () => {
    return new Promise((resolve, reject) => {
        const dateInput = document.querySelector('input[type="date"]');
        const selectedDate = new Date(dateInput.value);
        
        const minDate = new Date('2024-03-31');
        const maxDate = new Date('2024-04-31');

        if (selectedDate >= minDate && selectedDate <= maxDate) {
            resolve(selectedDate);
        } else {
            alert('Fecha incorrecta');
            reject('Selecciona una fecha válida.');
        }
    });
};

// Example usage:
checkSelectedDate()
    .then((selectedDate) => {
        console.log('Selected date is within the allowed period:', selectedDate);
        // Do something with the selected date
    })
    .catch((error) => {
        console.error('Error:', error);
        // Handle the error (e.g., display a message to the user)
    });
