import React from "react"

export default function HeaderRSVP() {
    return (
        <form name="contact" netlify>
            <p classname="rsvpcomment">
                <label>Name <input type="text" name="name" /></label>
            </p>
            <p classname="rsvpcomment">
                <label>Email <input type="email" name="email" /></label>
            </p>
            <p classname="rsvpcomment">
                <label>Phone <input type="email" name="email" /></label>
            </p>
            <p classname="rsvpcomment">
                <label>Number of Guests <input type="email" name="email" /></label>
            </p>
            <p classname="rsvpcomment">
                <label>Comments <input type="email" name="email" /></label>
            </p>
            <p>
                <button type="submit">Send</button>
            </p>
        </form>
    )
}