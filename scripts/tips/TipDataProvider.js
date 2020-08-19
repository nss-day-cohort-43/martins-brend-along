const tipDataCollection = [
    {
        tipNumber: "#1",
        tip: "Keep them watered."
    },
    {
        tipNumber: "#2",
        tip: "Keep them fed."
    },
    {
        tipNumber: "#3",
        tip: "Keep them happy."
    },
    {
        tipNumber: "#3",
        tip: "Play them music."
    },
    {
        tipNumber: "#4",
        tip: "Keep the cat happy."
    },
    {
        tipNumber: "#5",
        tip: "Let the cat watch the fish."
    }
]
    
export const useTip = () => {
    return tipDataCollection.slice();
}