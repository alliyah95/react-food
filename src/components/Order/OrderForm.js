import React, { useContext, useReducer } from "react";
import AppContext from "../../store/app-context";

const ACTIONS = {
    VALIDATE_NAME: "name",
    VALIDATE_ADDRESS: "address",
    VALIDATE_EMAIL: "email",
};

const inputReducer = (inputState, action) => {
    const validText = (text) => text.length > 0;

    switch (action.type) {
        case ACTIONS.VALIDATE_NAME:
            return {
                ...inputState,
                name: action.payload.content,
                nameTouched: action.payload.nameTouched,
                validName:
                    action.payload.nameTouched &&
                    validText(action.payload.content),
            };
        case ACTIONS.VALIDATE_ADDRESS:
            return {
                ...inputState,
                address: action.payload.content,
                addressTouched: action.payload.addressTouched,
                validAddress:
                    action.payload.addressTouched &&
                    validText(action.payload.content),
            };
        case ACTIONS.VALIDATE_EMAIL:
            return {
                ...inputState,
                email: action.payload.content,
                emailTouched: action.payload.emailTouched,
                validEmail:
                    action.payload.emailTouched &&
                    action.payload.content.includes("@"),
            };
    }
};

const OrderForm = () => {
    const [inputState, dispatchInput] = useReducer(inputReducer, {
        name: "",
        nameTouched: false,
        validName: false,
        address: "",
        addressTouched: false,
        validAddress: false,
        email: "",
        emailTouched: false,
        validEmail: false,
    });

    const appContext = useContext(AppContext);

    const nameHandler = (evt) => {
        dispatchInput({
            type: ACTIONS.VALIDATE_NAME,
            payload: {
                nameTouched: true,
                content: evt.target.value,
            },
        });
    };

    const addressHandler = (evt) => {
        dispatchInput({
            type: ACTIONS.VALIDATE_ADDRESS,
            payload: {
                addressTouched: true,
                content: evt.target.value,
            },
        });
    };

    const emailHandler = (evt) => {
        dispatchInput({
            type: ACTIONS.VALIDATE_EMAIL,
            payload: {
                emailTouched: true,
                content: evt.target.value,
            },
        });
    };

    const orderHandler = () => {};

    return (
        <form className="flex flex-col">
            <div>
                <label htmlFor="name">Name</label>
                <input id="name" onChange={nameHandler} />
                {!inputState.validName && inputState.nameTouched && (
                    <p className="text-sm text-tertiary ">
                        Name can't be empty
                    </p>
                )}
            </div>
            <div>
                <label htmlFor="address">Address</label>
                <input id="name" onChange={addressHandler} />
                {!inputState.validAddress && inputState.addressTouched && (
                    <p className="text-sm text-tertiary ">
                        Address can't be empty
                    </p>
                )}
            </div>
            <div>
                <label htmlFor="email">Email address</label>
                <input id="email" onChange={emailHandler} type="email" />
                {!inputState.validEmail && inputState.emailTouched && (
                    <p className="text-sm text-tertiary ">
                        Invalid email address
                    </p>
                )}
            </div>

            <button
                className="w-full md:w-auto py-1 px-8 self-end bg-secondary hover:bg-secondary-dark active:bg-secondary-dark text-white font-decorated "
                disabled={
                    !inputState.validName ||
                    !inputState.validAddress ||
                    !inputState.validEmail
                }
            >
                Checkout
            </button>
        </form>
    );
};

export default OrderForm;
