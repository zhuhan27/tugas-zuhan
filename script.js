let bookings = [];
let currentCourtType = "";

// Menampilkan form booking
function showBookingForm(courtType) {
  currentCourtType = courtType;
  document.getElementById("menu").classList.add("hidden");
  document.getElementById("booking-form").classList.remove("hidden");
  document.getElementById("form-title").innerText = `Booking Lapangan ${courtType}`;
}

// Submit booking
function submitBooking() {
  const hours = parseInt(document.getElementById("hours").value);
  if (isNaN(hours) || hours <= 0) {
    alert("Durasi tidak valid!");
    return;
  }

  const price = currentCourtType === "Futsal" ? 100000 : 80000;
  const totalCost = hours * price;

  bookings.push({
    courtType: currentCourtType,
    hours,
    totalCost,
  });

  alert(`Booking berhasil!\nLapangan: ${currentCourtType}\nDurasi: ${hours} jam\nTotal Biaya: Rp${totalCost}`);
  goBack();
}

// Menampilkan semua booking
function showAllBookings() {
  document.getElementById("menu").classList.add("hidden");
  document.getElementById("bookings").classList.remove("hidden");

  const bookingList = document.getElementById("booking-list");
  bookingList.innerHTML = "";

  if (bookings.length === 0) {
    bookingList.innerHTML = "<li>Belum ada booking.</li>";
    return;
  }

  bookings.forEach((booking, index) => {
    const listItem = document.createElement("li");
    listItem.innerText = `${index + 1}. ${booking.courtType} - ${booking.hours} jam - Rp${booking.totalCost}`;
    bookingList.appendChild(listItem);
  });
}

// Kembali ke menu utama
function goBack() {
  document.getElementById("menu").classList.remove("hidden");
  document.getElementById("booking-form").classList.add("hidden");
  document.getElementById("bookings").classList.add("hidden");
}
