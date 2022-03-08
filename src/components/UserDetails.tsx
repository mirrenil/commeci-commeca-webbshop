function UserDetails() {
  return (
    <div>
      <form action="">
        <label htmlFor="name" id="name">
          Namn
        </label>
        <input type="text" name="name" id="name" />
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="address">Adress</label>
        <input type="text" name="address" id="address" />
        <label htmlFor="phone">Telefonnummer</label>
        <input type="number" name="phone" id="phone" />
        <button type="submit">Gå vidare</button>
      </form>
    </div>
  );
}
export default UserDetails;
