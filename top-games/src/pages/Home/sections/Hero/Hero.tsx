import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { Box, Card, CardContent, IconButton, Typography } from '@mui/material';
import { ArrowUpward, MoreHoriz } from '@mui/icons-material';
const games = [
    { name: "Nome Jogo", rankUp: true },
    { name: "Nome Jogo", rankUp: false },
    { name: "Nome Jogo", rankUp: true },
  ];

const Hero = () => {
    return(
        <>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 3, p: 4 }}>
        {games.map((game, index) => (
          <Card key={index} sx={{ width: 200, p: 2, position: "relative" }}>
            <CardContent>
              <Typography variant="h6" align="center">{game.name}</Typography>
              <Box sx={{ height: 100, bgcolor: "#e57373", display: "flex", alignItems: "center", justifyContent: "center" }}>
                img
              </Box>
              <Box sx={{ position: "absolute", top: 10, right: 10 }}>
                {game.rankUp ? <KeyboardDoubleArrowUpIcon color="success" /> : <KeyboardDoubleArrowDownIcon color="error" />}
              </Box>
              <Box sx={{ position: "absolute", bottom: 10, right: 10 }}>
                <IconButton>
                  <MoreHoriz />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
        </>
    )
}
export default Hero