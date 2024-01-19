import React, { useState } from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Swords from "./Swords"
import Thumb from "./Thumb"

const BattleCard = ({}: BattleCardProps) => {
    const [startPressed, setStartPressed] = useState(false)
    const [battleInProgress, setBattleInProgress] = useState(false)
    const [victory, setVictory] = useState(true)

    const handleStartPressed = () => {
        setStartPressed(true)
        setBattleInProgress(true)
        setTimeout(() => {
            const result = Math.random() > 0.5
            setVictory(result)
            setBattleInProgress(false)
        }, 10000)
    }

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: "100vh" }}
        >
            <Grid item xs={3}>
                <Card
                    sx={{
                        minWidth: "50vw",
                        minHeight: "50vh",
                        backgroundColor: "rgba(255, 255, 255, 0.94)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <CardContent>
                        {startPressed &&
                            (battleInProgress ? (
                                <Swords />
                            ) : (
                                <>
                                    <Thumb thumbsUp={victory} />
                                    <Typography
                                        variant="h2"
                                        color={victory ? "success.main" : "error.main"}
                                        style={{ animation: "fadeIn 5s" }}
                                    >
                                        {victory ? "Victory" : "Defeat"}
                                    </Typography>
                                </>
                            ))}
                        {!startPressed && (
                            <Button size="large" color="primary" variant="contained" onClick={handleStartPressed}>
                                Start Battle
                            </Button>
                        )}
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

type BattleCardProps = {}

export default BattleCard
