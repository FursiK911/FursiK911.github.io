import { getProjectMediaAsset } from '../utils/getProjectMediaAsset'

export const projectMedia = {
  myChessWeb: {
    logo: getProjectMediaAsset('my-chess-web/logo.webp'),
    profile: getProjectMediaAsset('my-chess-web/profile.webp'),
    allVersusOne: getProjectMediaAsset('my-chess-web/all-versus-one.webp'),
    analysis: getProjectMediaAsset('my-chess-web/analysis.webp'),
    authorization: getProjectMediaAsset('my-chess-web/authorization.webp'),
    champions: getProjectMediaAsset('my-chess-web/champions.webp'),
    messages: getProjectMediaAsset('my-chess-web/messages.webp'),
    notifications: getProjectMediaAsset('my-chess-web/notifications.webp'),
    observerTournament: getProjectMediaAsset(
      'my-chess-web/observer-tournament.webp',
    ),
    puzzles: getProjectMediaAsset('my-chess-web/puzzles.webp'),
    puzzles2: getProjectMediaAsset('my-chess-web/puzzles-2.webp'),
    selectGame: getProjectMediaAsset('my-chess-web/select-game.webp'),
    tournament: getProjectMediaAsset('my-chess-web/tournament.webp'),
  },
  saridu: {
    manInVr: getProjectMediaAsset('vr-saridu/man_in_vr.jpg'),
    womanInVr: getProjectMediaAsset('vr-saridu/woman_in_vr.jpg'),
  },
  myChessVr: {
    locationLibrary: getProjectMediaAsset('my-chess-vr/location_library.webp'),
    gameplay1: getProjectMediaAsset('my-chess-vr/gameplay1.webp'),
    gameplay2: getProjectMediaAsset('my-chess-vr/gameplay2.webp'),
    gameplay3: getProjectMediaAsset('my-chess-vr/gameplay3.webp'),
    gameplay4: getProjectMediaAsset('my-chess-vr/gameplay4.webp'),
    gameplay5: getProjectMediaAsset('my-chess-vr/gameplay5.webp'),
    stockfishAnalysis: getProjectMediaAsset(
      'my-chess-vr/stockfish_analysis.webp',
    ),
    chessPuzzles: getProjectMediaAsset('my-chess-vr/chess_puzzles.webp'),
    locationPark: getProjectMediaAsset('my-chess-vr/location_park.webp'),
    locationCafe: getProjectMediaAsset('my-chess-vr/location_cafe.webp'),
  },
  friezeViewingRoom: {
    screens: [1, 2, 3, 4, 5, 6].map((screen) =>
      getProjectMediaAsset(`frieze-viewing-room/screen-${screen}.webp`),
    ),
  },
  neo4Sightline: {
    screens: [1, 2, 3, 4, 5].map((screen) =>
      getProjectMediaAsset(`neo4-sightline/screen_${screen}.webp`),
    ),
  },
  vrDrillingTraining: {
    screens: [1, 2, 3, 4, 5, 6, 7, 8, 9].map((screen) =>
      getProjectMediaAsset(`vr-drilling-training/screen_${screen}.webp`),
    ),
  },
  vulkanVerse: {
    city: getProjectMediaAsset('vulkan-verse/vulkan-verse-city.webp'),
    shrine: getProjectMediaAsset('vulkan-verse/vulkan-verse-shrine.webp'),
    world: getProjectMediaAsset('vulkan-verse/vulkan-verse-world.webp'),
    temple: getProjectMediaAsset('vulkan-verse/vulkan-verse-temple.webp'),
    notus: getProjectMediaAsset('vulkan-verse/vulkan-verse-notus.webp'),
  },
  earthDragons: {
    logo: getProjectMediaAsset('earth-dragons/logo.webp'),
    gameplay1: getProjectMediaAsset('earth-dragons/gameplay_1.webp'),
    gameplay2: getProjectMediaAsset('earth-dragons/gameplay_2.webp'),
    gameplay3: getProjectMediaAsset('earth-dragons/gameplay_3.webp'),
    screens: [1, 2, 3, 4, 5, 6, 7, 8].map((screen) =>
      getProjectMediaAsset(
        `earth-dragons/earth-dragons-${String(screen).padStart(2, '0')}.webp`,
      ),
    ),
  },
  villaKrim: {
    logo1: getProjectMediaAsset('villa-krim/logo_1.webp'),
    logo2: getProjectMediaAsset('villa-krim/logo_2.webp'),
    screens: [1, 2, 3].map((screen) =>
      getProjectMediaAsset(`villa-krim/screen_${screen}.webp`),
    ),
  },
  authorsWineVillaKrim: {
    logo1: getProjectMediaAsset('authors-wine-villa-krim/logo_1.webp'),
    logo2: getProjectMediaAsset('authors-wine-villa-krim/logo_2.webp'),
    screens: [1, 2, 3].map((screen) =>
      getProjectMediaAsset(`authors-wine-villa-krim/screen_${screen}.webp`),
    ),
  },
  chudoProjector: {
    screens: [1, 2, 3].map((screen) =>
      getProjectMediaAsset(`chudo-projector/screen_${screen}.webp`),
    ),
  },
  arColoring: {
    home: getProjectMediaAsset('ar-coloring/ar-coloring-home.webp'),
    themes: getProjectMediaAsset('ar-coloring/ar-coloring-themes.webp'),
    animals: getProjectMediaAsset('ar-coloring/ar-coloring-animals.webp'),
  },
  arColoringZebra: {
    screens: [1, 2, 3, 4, 5].map((screen) =>
      getProjectMediaAsset(`ar-coloring-zebra/screen-${screen}.webp`),
    ),
  },
  arChudobook: {
    screens: [1, 2].map((screen) =>
      getProjectMediaAsset(`ar-chudobook/screen_${screen}.webp`),
    ),
  },
  arChudoboxes: {
    one: getProjectMediaAsset('ar-chudoboxes/ar-chudaboxes-one.webp'),
    two: getProjectMediaAsset('ar-chudoboxes/ar-chudaboxes-two.webp'),
    three: getProjectMediaAsset('ar-chudoboxes/ar-chudaboxes-three.webp'),
  },
  myChessMobile: {
    screens: [1, 2, 3, 4, 5].map((screen) =>
      getProjectMediaAsset(`my-chess-mobile/myChess-${screen}.webp`),
    ),
  },
} as const
