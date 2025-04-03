"use client"
import { useEffect, useState } from "react";
import { Container, Typography, Card, CardContent, Button, Box } from "@mui/material";

interface Game {
  id: number;
  name: string;
  genre: string;
  votes: number;
}

export default function RankingPage() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetchRanking();
  }, []);

  const fetchRanking = async () => {
    try {
      const response = await fetch("http://localhost:8080/ranking");
      const data = await response.json();
      setGames(data);
    } catch (error) {
      console.error("Erro ao buscar ranking:", error);
    }
  };

  const voteForGame = async (gameId: number) => {
    try {
      const response = await fetch(`http://localhost:8080/ranking/vote/${gameId}`, {
        method: "POST",
      });

      if (response.ok) {
        fetchRanking(); // Atualiza o ranking após o voto
      } else {
        console.error("Erro ao votar no jogo");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  return (
    <Container>
      <Typography variant="h3" gutterBottom textAlign="center">
        Ranking de Jogos
      </Typography>
      {games.map((game) => (
        <Card key={game.id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h5">{game.name}</Typography>
            <Typography variant="body1">Gênero: {game.genre}</Typography>
            <Typography variant="body2">Votos: {game.votes}</Typography>
            <Box mt={2}>
              <Button variant="contained" color="primary" onClick={() => voteForGame(game.id)}>
                Votar
              </Button>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}
