export default function Inputs() {
  return (
    <div className="inputs">

      <label>Name</label>
      <input type="text" placeholder="e.g. Stephen King" />

      <label>Email Address</label>
      <input
        type="email"
        placeholder="e.g. stephenking@lorem.com"
      />

      <label>Phone Number</label>
      <input
        type="tel"
        placeholder="e.g. +1 234 567 890"
      />

    </div>
  );
}

