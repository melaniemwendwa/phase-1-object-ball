// Sample game object (you would replace this with your actual game object)
const game = {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7
        }
      }
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10
        }
      }
    }
  };
  
  // 1. Returns points scored by a player
  function numPointsScored(playerName) {
    for (const team in game) {
      if (game[team].players.hasOwnProperty(playerName)) {
        return game[team].players[playerName].points;
      }
    }
    return 0;
  }
  
  // 2. Returns shoe size of a player
  function shoeSize(playerName) {
    for (const team in game) {
      if (game[team].players.hasOwnProperty(playerName)) {
        return game[team].players[playerName].shoe;
      }
    }
    return 0;
  }
  
  // 3. Returns team colors
  function teamColors(teamName) {
    for (const team in game) {
      if (game[team].teamName === teamName) {
        return game[team].colors;
      }
    }
    return [];
  }
  
  // 4. Returns array of team names
  function teamNames() {
    return [game.home.teamName, game.away.teamName];
  }
  
  // 5. Returns jersey numbers for a team
  function playerNumbers(teamName) {
    const numbers = [];
    for (const team in game) {
      if (game[team].teamName === teamName) {
        for (const player in game[team].players) {
          numbers.push(game[team].players[player].number);
        }
      }
    }
    return numbers;
  }
  
  // 6. Returns player stats
  function playerStats(playerName) {
    for (const team in game) {
      if (game[team].players.hasOwnProperty(playerName)) {
        return game[team].players[playerName];
      }
    }
    return {};
  }
  
  // 7. Returns rebounds of player with largest shoe size
  function bigShoeRebounds() {
    let largestShoe = 0;
    let rebounds = 0;
    
    for (const team in game) {
      for (const player in game[team].players) {
        if (game[team].players[player].shoe > largestShoe) {
          largestShoe = game[team].players[player].shoe;
          rebounds = game[team].players[player].rebounds;
        }
      }
    }
    return rebounds;
  }
  
  // 8. Returns player with most points
  function mostPointsScored() {
    let maxPoints = 0;
    let topPlayer = "";
    
    for (const team in game) {
      for (const player in game[team].players) {
        if (game[team].players[player].points > maxPoints) {
          maxPoints = game[team].players[player].points;
          topPlayer = player;
        }
      }
    }
    return topPlayer;
  }
  
  // 9. Returns winning team name
  function winningTeam() {
    let homePoints = 0;
    let awayPoints = 0;
    
    for (const player in game.home.players) {
      homePoints += game.home.players[player].points;
    }
    
    for (const player in game.away.players) {
      awayPoints += game.away.players[player].points;
    }
    
    return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
  }
  
  // 10. Returns player with longest name
  function playerWithLongestName() {
    let longestName = "";
    
    for (const team in game) {
      for (const player in game[team].players) {
        if (player.length > longestName.length) {
          longestName = player;
        }
      }
    }
    return longestName;
  }
  
  // 11. Checks if player with longest name has most steals
  function doesLongNameStealATon() {
    const longestNamePlayer = playerWithLongestName();
    let maxSteals = 0;
    let topThief = "";
    
    for (const team in game) {
      for (const player in game[team].players) {
        if (game[team].players[player].steals > maxSteals) {
          maxSteals = game[team].players[player].steals;
          topThief = player;
        }
      }
    }
    
    return longestNamePlayer === topThief;
  }

//sample codes:
console.log("1. Points scored by Alan Anderson:", numPointsScored("Alan Anderson")); 
console.log("2. Shoe size of Reggie Evans:", shoeSize("Reggie Evans"));
console.log("3. Colors of Brooklyn Nets:", teamColors("Brooklyn Nets")); 
console.log("4. Team names:", teamNames()); 
console.log("5. Jersey numbers for Charlotte Hornets:", playerNumbers("Charlotte Hornets")); 
console.log("6. Stats for Jeff Adrien:", playerStats("Jeff Adrien")); 
console.log("7. Rebounds of player with largest shoe size:", bigShoeRebounds()); 
console.log("8. Player with most points:", mostPointsScored()); 
console.log("9. Winning team:", winningTeam()); 
console.log("10. Player with longest name:", playerWithLongestName()); 
console.log("11. Does longest name steal the most?:", doesLongNameStealATon()); 