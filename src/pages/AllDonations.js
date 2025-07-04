useEffect(() => {
  fetch("http://localhost:5001/donations")
    .then(res => res.json())
    .then(data => setDonations(data));
}, []);
{donations.map(donation => (
  <div key={donation._id}>
    {donation.name} donated ₹{donation.amount} via {donation.paymentMethod} for {donation.campaignTitle}
  </div>
))}
