import streamlit as st
import streamlit.components.v1 as components

st.set_page_config(page_title="Vayu Yodha Sthal", layout="wide")

st.title("Vayu Yodha Sthal – Audio Guided Tour")
st.write("Below is the full interactive React tour:")

components.iframe(
    "https://NSudeshnu17.github.io/vayu-yodha-sthal/",
    height=800,
    scrolling=True,
)
