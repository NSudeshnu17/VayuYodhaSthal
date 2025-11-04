import streamlit as st
import streamlit.components.v1 as components

st.set_page_config(page_title="Vayu Yodha Sthal", layout="wide")

st.title("Vayu Yodha Sthal – Audio Guided Tour")
st.write("Below is the full interactive React tour:")

components.iframe(
    "https://nsudeshnu17.github.io/VayuYodhaSthal/",
    height=800,
    scrolling=True,
)
