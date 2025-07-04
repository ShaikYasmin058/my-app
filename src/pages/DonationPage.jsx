// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import "./DonationPage.css";

// const DonationPage = () => {
//   const location = useLocation();

//   const defaultCampaign = {
//     title: "Support Our Cause",
//     description:
//       "Every donation counts and helps us serve those in need. Your contribution helps us continue our mission of education, food, and care.",
//     image:
//       "https://images.pexels.com/photos/6646900/pexels-photo-6646900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//     amount: "",
//   };

//   const campaign = location.state || defaultCampaign;

//   const [name, setName] = useState("");
//   const [amount, setAmount] = useState(campaign.amount || "");
//   const [paymentMethod, setPaymentMethod] = useState("PhonePe");
//   const [donations, setDonations] = useState([]);

//   const handleDonate = async () => {
//     if (!name.trim() || amount <= 0) {
//       alert("Please enter a valid name and donation amount.");
//       return;
//     }
//    fetch("http://localhost:5001/initiate-payment", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     name,
//     amount,
//     paymentMethod,
//     campaignTitle: campaign.title,

//   }),
// })
//   .then(res => res.json())
//   .then(data => {
//     if (data.success) {
//       window.location.href = data.redirectUrl; // Open UPI payment
//     } else {
//       alert("Failed to initiate donation.");
//     }
//   })
//   .catch(err => {
//     console.error(err);
//     alert("Server error!");
//   });

//     // Save donation in frontend history
//     const newDonation = {
//       id: donations.length + 1,
//       name,
//       amount,
//       paymentMethod,
//       date: new Date().toLocaleString(),
//     };
//     setDonations([...donations, newDonation]);

//     try {
//       const response = await fetch("http://localhost:5001/initiate-payment", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name,
//           amount,
//           paymentMethod,
//           campaignTitle: campaign.title,
//         }),
//       });

//       const data = await response.json();

//       if (data.redirectUrl) {
//         // Redirect to PhonePe gateway
//         window.location.href = data.redirectUrl;
//       } else {
//         alert("⚠️ Failed to create payment session.");
//       }
//     } catch (error) {
//       console.error("Payment Error:", error);
//       alert("⚠️ Payment initiation failed. Please try again.");
//     }

//     // Reset form
//     setName("");
//     setAmount(campaign.amount || "");
//     setPaymentMethod("PhonePe");
//   };

//   return (
//     <div className="donation-page">
//       <div className="donation-content">
//         <div className="donation-info">
//           <h1 className="donation-title">{campaign.title}</h1>
//           <p className="donation-description">{campaign.description}</p>

//           <div className="donation-form">
//             <input
//               type="text"
//               placeholder="Your Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//             <input
//               type="number"
//               placeholder="Donation Amount (₹)"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//             />
//             <select
//               value={paymentMethod}
//               onChange={(e) => setPaymentMethod(e.target.value)}
//             >
//               <option disabled>Select Payment Method</option>
//               <option value="PhonePe">PhonePe</option>
//               <option value="Google Pay">Google Pay</option>
//               <option value="PayPal">PayPal</option>
//             </select>

//             <button className="donate-button" onClick={handleDonate}>
//               Donate Now ❤️
//             </button>
//           </div>
//         </div>

//         <div className="donation-image-container">
//           <img
//             className="donation-image"
//             src={campaign.image}
//             alt={campaign.title}
//           />
//         </div>
//       </div>

//       {donations.length > 0 && (
//         <div className="donation-history">
//           <h2>Recent Donations</h2>
//           <ul>
//             {donations.map((donation) => (
//               <li key={donation.id}>
//                 <strong>{donation.name}</strong> donated{" "}
//                 <span className="donation-amount">₹{donation.amount}</span> via{" "}
//                 <span className="payment-method">{donation.paymentMethod}</span> on{" "}
//                 {donation.date}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DonationPage;



import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./DonationPage.css";

const DonationPage = () => {
  const location = useLocation();

  const defaultCampaign = {
    title: "Support Our Cause",
    description:
      "Every donation counts and helps us serve those in need. Your contribution helps us continue our mission of education, food, and care.",
    image:
      "https://images.pexels.com/photos/6646900/pexels-photo-6646900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    amount: "",
  };

  const campaign = location.state || defaultCampaign;

  const [name, setName] = useState("");
  const [amount, setAmount] = useState(campaign.amount || "");
  const [paymentMethod, setPaymentMethod] = useState("PhonePe");
  const [donations, setDonations] = useState([]);

  const handleDonate = async () => {
    if (!name.trim() || amount <= 0) {
      alert("Please enter a valid name and donation amount.");
      return;
    }

    // Save to local frontend history (optional)
    const newDonation = {
      id: donations.length + 1,
      name,
      amount,
      paymentMethod,
      date: new Date().toLocaleString(),
    };
    setDonations([...donations, newDonation]);

    try {
      const response = await fetch("http://localhost:5001/initiate-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          amount,
          paymentMethod,
          campaignTitle: campaign.title,
        }),
      });

      const data = await response.json();

      if (data.redirectUrl) {
        window.location.href = data.redirectUrl;
      } else {
        alert("⚠️ Failed to create payment session.");
      }
    } catch (error) {
      console.error("Payment Error:", error);
      alert("⚠️ Payment initiation failed. Please try again.");
    }

    // Reset form fields
    setName("");
    setAmount(campaign.amount || "");
    setPaymentMethod("PhonePe");
  };

  return (
    <div className="donation-page">
      <div className="donation-content">
        <div className="donation-info">
          <h1 className="donation-title">{campaign.title}</h1>
          <p className="donation-description">{campaign.description}</p>

          <div className="donation-form">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Donation Amount (₹)"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="PhonePe">PhonePe</option>
              <option value="Google Pay">Google Pay</option>
              <option value="PayPal">PayPal</option>
            </select>

            <button className="donate-button" onClick={handleDonate}>
              Donate Now ❤️
            </button>
          </div>
        </div>

        <div className="donation-image-container">
          <img
            className="donation-image"
            src={campaign.image}
            alt={campaign.title}
          />
        </div>
      </div>

      {donations.length > 0 && (
        <div className="donation-history">
          <h2>Recent Donations</h2>
          <ul>
            {donations.map((donation) => (
              <li key={donation.id}>
                <strong>{donation.name}</strong> donated{" "}
                <span className="donation-amount">₹{donation.amount}</span> via{" "}
                <span className="payment-method">{donation.paymentMethod}</span> on{" "}
                {donation.date}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DonationPage;
