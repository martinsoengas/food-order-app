import classes from "./Checkout.module.css";
import useInput from "../hooks/use-input";
import useHttp from "../hooks/use-http";

const Checkout = (props) => {
  const isNotEmpty = (value) => value.trim() !== "";

  const {
    value: enteredName,
    hasError: nameInputHasError,
    isValid: enteredNameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredAddress,
    hasError: addressInputHasError,
    isValid: enteredAddressIsValid,
    valueChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
    reset: resetAddressInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredPostal,
    hasError: postalInputHasError,
    isValid: enteredPostalIsValid,
    valueChangeHandler: postalChangeHandler,
    inputBlurHandler: postalBlurHandler,
    reset: resetPostalInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredCity,
    hasError: cityInputHasError,
    isValid: enteredCityIsValid,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    reset: resetCityInput,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredAddressIsValid &&
    enteredPostalIsValid &&
    enteredCityIsValid
  ) {
    formIsValid = true;
  }

  const confirmHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    resetNameInput();
    resetAddressInput();
    resetPostalInput();
    resetCityInput();

    const newOrder = {
      name: enteredName,
      address: enteredAddress,
      postal: enteredPostal,
      city: enteredCity,
    };

    props.sendOrder(newOrder);

    // console.log(enteredName, enteredAddress, enteredPostal, enteredCity);
  };

  const invalidClass = `${classes.control} ${classes.invalid}`;
  const validClass = classes.control;

  const nameInputClasses = nameInputHasError ? invalidClass : validClass;

  const addressInputClasses = addressInputHasError ? invalidClass : validClass;

  const postalInputClasses = postalInputHasError ? invalidClass : validClass;

  const cityInputClasses = cityInputHasError ? invalidClass : validClass;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
      </div>
      <div className={addressInputClasses}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          value={enteredAddress}
          onChange={addressChangeHandler}
          onBlur={addressBlurHandler}
        />
      </div>
      <div className={postalInputClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          value={enteredPostal}
          onChange={postalChangeHandler}
          onBlur={postalBlurHandler}
        />
      </div>
      <div className={cityInputClasses}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          value={enteredCity}
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
        />
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit} disabled={!formIsValid}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
