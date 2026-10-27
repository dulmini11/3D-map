import type { SceneConfig } from "@liveroom-tech/react-immersive/utils";

export const sceneConfig: SceneConfig = {
  "model": {
    "rotation": [
      90,
      0,
      0
    ],
    "showAdvancedRotation": false,
    "renderer": "pbr",
    "shading": "lit",
    "autoRotate": false,
    "autoRotateSpeed": 1,
    "activeVariants": []
  },
  "camera": {
    "fieldOfView": 50,
    "showAdvancedSettings": false
  },
  "lighting": {
    "ambient": {
      "intensity": 0.25,
      "color": "#ffffff"
    },
    "lights": [
      {
        "id": "light-hemi",
        "type": "hemisphere",
        "color": "#ffffff",
        "intensity": 0.3,
        "position": [
          0,
          1,
          0
        ],
        "attachedToCamera": false,
        "castShadow": false,
        "shadowBias": -0.0005,
        "visible": true
      },
      {
        "id": "light-key",
        "type": "directional",
        "color": "#ffffff",
        "intensity": 2.5,
        "position": [
          6,
          12,
          6
        ],
        "attachedToCamera": false,
        "castShadow": true,
        "shadowBias": -0.0005,
        "visible": true
      },
      {
        "id": "light-fill",
        "type": "directional",
        "color": "#ffffff",
        "intensity": 0,
        "position": [
          -6,
          8,
          -6
        ],
        "attachedToCamera": false,
        "castShadow": false,
        "shadowBias": -0.0005,
        "visible": true
      }
    ]
  },
  "shadows": {
    "enabled": true,
    "mapSize": 2048,
    "bias": -0.0005,
    "normalBias": 0.02,
    "radius": 3
  },
  "environment": {
    "source": "preset",
    "preset": "apartment",
    "customEnvironmentUrl": "",
    "intensity": 0.25,
    "rotation": 0,
    "shadowLight": {
      "enabled": false,
      "intensity": 2.5,
      "bias": -0.0005
    }
  },
  "wireframe": {
    "enabled": false,
    "color": "#000000",
    "opacity": 1
  },
  "background": {
    "enabled": false,
    "type": "color",
    "color": "#1c1c1d",
    "imageUrl": ""
  },
  "groundShadows": {
    "enabled": false,
    "mode": "shadowCatcher",
    "intensity": 0.7,
    "borderFade": 1,
    "height": 0,
    "size": 10
  },
  "postProcessing": {
    "autofocus": {
      "enabled": false,
      "focusDistance": 5,
      "focusRange": 5,
      "focalLength": 0.02,
      "bokehScale": 6,
      "target": [
        0,
        0,
        0
      ],
      "mouse": true,
      "debug": 0,
      "manual": false,
      "smoothTime": 0.25
    },
    "toneMapping": {
      "enabled": false,
      "mode": "aces",
      "exposure": 1,
      "resolution": 256,
      "whitePoint": 4,
      "middleGrey": 0.6,
      "minLuminance": 0.01,
      "averageLuminance": 1,
      "adaptationRate": 1
    },
    "brightnessContrast": {
      "enabled": false,
      "brightness": 0,
      "contrast": 0
    },
    "hueSaturation": {
      "enabled": false,
      "hue": 0,
      "saturation": 0
    },
    "colorAverage": {
      "enabled": false
    },
    "dotScreen": {
      "enabled": false,
      "angle": 1.5707963267948966,
      "scale": 1
    },
    "glitch": {
      "enabled": false,
      "mode": "sporadic",
      "delay": [
        1.5,
        3.5
      ],
      "duration": [
        0.6,
        1
      ],
      "strength": [
        0.3,
        1
      ],
      "chromaticAberrationOffset": [
        0,
        0
      ],
      "columns": 0.05,
      "ratio": 0.85
    },
    "ssao": {
      "enabled": false,
      "samples": 30,
      "rings": 4,
      "intensity": 8,
      "radius": 0.25,
      "bias": 0.025,
      "luminanceInfluence": 0.6,
      "fade": 0.01,
      "minRadiusScale": 0.33,
      "worldDistanceThreshold": 20,
      "worldDistanceFalloff": 5,
      "worldProximityThreshold": 6,
      "worldProximityFalloff": 3
    },
    "bloom": {
      "enabled": false,
      "intensity": 0.3,
      "luminanceThreshold": 0.9,
      "luminanceSmoothing": 0.2,
      "mipmapBlur": true,
      "radius": 0,
      "levels": 8
    },
    "godRays": {
      "enabled": false,
      "sunPosition": [
        5,
        10,
        5
      ],
      "samples": 60,
      "density": 0.96,
      "decay": 0.9,
      "weight": 0.4,
      "exposure": 0.6,
      "clampMax": 1,
      "blur": true,
      "kernelSize": "small"
    },
    "grid": {
      "enabled": false,
      "scale": 1,
      "lineWidth": 0
    },
    "noise": {
      "enabled": false,
      "opacity": 1,
      "premultiply": false
    },
    "depthOfField": {
      "enabled": false,
      "focusDistance": 5,
      "focusRange": 5,
      "focalLength": 0.02,
      "bokehScale": 6
    },
    "chromaticAberration": {
      "enabled": false,
      "offsetX": 0.002,
      "offsetY": 0.002,
      "radialModulation": false,
      "modulationOffset": 0.15
    },
    "lensflare": {
      "enabled": false,
      "lensPosition": [
        -25,
        6,
        -60
      ],
      "smoothTime": 0.07,
      "glareSize": 0.2,
      "flareSize": 0.01,
      "flareSpeed": 0.01,
      "flareShape": 0.01,
      "animated": true,
      "anamorphic": false,
      "colorGain": "#141414",
      "haloScale": 0.5,
      "secondaryGhosts": true,
      "aditionalStreaks": true,
      "ghostScale": 0,
      "opacity": 1,
      "starBurst": false
    },
    "vignette": {
      "enabled": false,
      "offset": 0.3,
      "darkness": 0.3,
      "eskil": false
    },
    "smaa": {
      "enabled": false
    },
    "sepia": {
      "enabled": false,
      "intensity": 0
    },
    "scanline": {
      "enabled": false,
      "density": 1.25
    },
    "pixelation": {
      "enabled": false,
      "granularity": 5
    },
    "outline": {
      "enabled": false,
      "selectionLayer": 10,
      "edgeStrength": 2.5,
      "pulseSpeed": 0,
      "visibleEdgeColor": "#ffffff",
      "hiddenEdgeColor": "#22090a",
      "kernelSize": "large",
      "blur": false,
      "xRay": true
    },
    "selectiveBloom": {
      "enabled": false,
      "selectionLayer": 10,
      "intensity": 1,
      "luminanceThreshold": 0.9,
      "luminanceSmoothing": 0.025,
      "kernelSize": "large",
      "mipmapBlur": true,
      "inverted": false,
      "ignoreBackground": false
    },
    "ramp": {
      "enabled": false,
      "rampType": "linear",
      "rampStart": [
        0.5,
        0.5
      ],
      "rampEnd": [
        1,
        1
      ],
      "startColor": "#000000",
      "endColor": "#ffffff",
      "opacity": 0.5,
      "rampBias": 0.5,
      "rampGain": 0.5,
      "rampMask": false,
      "rampInvert": false
    }
  },
  "animations": {
    "clips": [],
    "autoplayClip": null
  },
  "annotations": [
    {
      "id": 1,
      "worldPosition": [
        -127.41860913289996,
        4.943964630667717,
        24.862999431455236
      ],
      "localPosition": [
        -127.41860913289996,
        4.943964630667717,
        24.862999431455236
      ],
      "worldNormal": [
        -0.02931677310383265,
        0.9976238356266415,
        -0.06234748915847637
      ],
      "anchorNodeName": "lotus-tower---nelum-kuluna_Object_6",
      "anchorLocalPosition": [
        -1.2454454003876663,
        -89.95611492682961,
        6.164607423740122
      ],
      "title": "Lotus Tower - Colombo",
      "description": "South Asia’s tallest tower, a lotus bud rising 350 m over the capital.",
      "cameraView": {
        "position": [
          -127.419,
          -57.163,
          101.844
        ],
        "target": [
          -127.419,
          -24.863,
          12.544
        ],
        "fov": 50,
        "zoom": 1
      },
      "images": [
        {
          "src": "/qr/lotus-tower.png",
          "alt": "QR code: scan to open Lotus Tower - Colombo on Wikipedia"
        }
      ],
      "links": [
        {
          "href": "https://en.wikipedia.org/wiki/Lotus_Tower",
          "label": "Open website"
        }
      ]
    },
    {
      "id": 2,
      "worldPosition": [
        -74.30735221964059,
        13.994951553393626,
        24.938921721037985
      ],
      "localPosition": [
        -74.30735221964059,
        13.994951553393626,
        24.938921721037985
      ],
      "worldNormal": [
        0.7230898893301262,
        0.6869270210944858,
        0.0726104650777137
      ],
      "anchorNodeName": "low+polly+elephant_tripo_node_e3e17227-e8d1-44df-a148-ee4a4e4abbc2",
      "anchorLocalPosition": [
        0.13655513848743464,
        0.46090982651342416,
        0.1474228022356501
      ],
      "title": "Yala National Park",
      "description": "Scrub jungle and rock outcrops, home to one of the world’s densest leopard populations.",
      "cameraView": {
        "position": [
          -74.307,
          -57.239,
          110.895
        ],
        "target": [
          -74.307,
          -24.939,
          21.595
        ],
        "fov": 50,
        "zoom": 1
      },
      "images": [
        {
          "src": "/qr/yala.png",
          "alt": "QR code: scan to open Yala National Park on Wikipedia"
        }
      ],
      "links": [
        {
          "href": "https://en.wikipedia.org/wiki/Yala_National_Park",
          "label": "Open website"
        }
      ]
    },
    {
      "id": 3,
      "worldPosition": [
        -132.56490269213302,
        2.5413067387699595,
        78.71319691232279
      ],
      "localPosition": [
        -132.56490269213302,
        2.5413067387699595,
        78.71319691232279
      ],
      "worldNormal": [
        0.09136726931713567,
        0.9956221355676275,
        0.0197125661771122
      ],
      "anchorNodeName": "model-(16)_Object_2",
      "anchorLocalPosition": [
        39.74288553261198,
        -30.751485453847653,
        177.62960525994686
      ],
      "title": "Southern Province",
      "description": "Golden beaches, the Galle Fort ramparts and whale-watching off Mirissa.",
      "cameraView": {
        "position": [
          -132.565,
          -122.913,
          135.141
        ],
        "target": [
          -132.565,
          -78.713,
          12.941
        ],
        "fov": 50,
        "zoom": 1
      },
      "images": [
        {
          "src": "/qr/southern-province.png",
          "alt": "QR code: scan to open Southern Province on Wikipedia"
        }
      ],
      "links": [
        {
          "href": "https://en.wikipedia.org/wiki/Southern_Province,_Sri_Lanka",
          "label": "Open website"
        }
      ]
    },
    {
      "id": 4,
      "worldPosition": [
        -89.15090635142354,
        15.897552713126025,
        -49.06047133159835
      ],
      "localPosition": [
        -89.15090635142354,
        15.897552713126025,
        -49.06047133159835
      ],
      "worldNormal": [
        -0.4440388701207901,
        0.895708753810248,
        -0.02313677094032218
      ],
      "anchorNodeName": "chaithyatemple_Object_3",
      "anchorLocalPosition": [
        2.4742839344641334,
        0.10775357519013617,
        0.8884498356237458
      ],
      "title": "Anuradhapura",
      "description": "The first great capital, its giant dagobas rising over the dry-zone plains.",
      "cameraView": {
        "position": [
          -89.151,
          18.46,
          107.698
        ],
        "target": [
          -89.151,
          49.06,
          23.098
        ],
        "fov": 50,
        "zoom": 1
      },
      "images": [
        {
          "src": "/qr/anuradhapura.png",
          "alt": "QR code: scan to open Anuradhapura on Wikipedia"
        }
      ],
      "links": [
        {
          "href": "https://en.wikipedia.org/wiki/Anuradhapura",
          "label": "Open website"
        }
      ]
    },
    {
      "id": 5,
      "worldPosition": [
        -95.178733760422,
        7.088751326356226,
        -29.07192929748669
      ],
      "localPosition": [
        -95.178733760422,
        7.088751326356226,
        -29.07192929748669
      ],
      "worldNormal": [
        -0.052908982853300604,
        0.9138680927066389,
        -0.4025490636756712
      ],
      "anchorNodeName": "tempel-tor_Object_2",
      "anchorLocalPosition": [
        1.0368540649635103,
        1.392296004338473,
        1.1014606147872927
      ],
      "title": "Polonnaruwa",
      "description": "A medieval royal city of palaces, reservoirs and the carved Buddhas of Gal Vihara.",
      "cameraView": {
        "position": [
          -95.179,
          0.172,
          93.789
        ],
        "target": [
          -95.179,
          29.072,
          13.889
        ],
        "fov": 50,
        "zoom": 1
      },
      "images": [
        {
          "src": "/qr/polonnaruwa.png",
          "alt": "QR code: scan to open Polonnaruwa on Wikipedia"
        }
      ],
      "links": [
        {
          "href": "https://en.wikipedia.org/wiki/Polonnaruwa",
          "label": "Open website"
        }
      ]
    },
    {
      "id": 6,
      "worldPosition": [
        -114.21364626355425,
        9.510626875445467,
        -124.54131225965207
      ],
      "localPosition": [
        -114.21364626355425,
        9.510626875445467,
        -124.54131225965207
      ],
      "worldNormal": [
        -0.2210871388029122,
        0.9447624560308758,
        0.2419594567906976
      ],
      "anchorNodeName": "lighthouse_Lighthouse_1",
      "anchorLocalPosition": [
        7.077384607579891,
        6.114980165311646,
        3.9763563064663865
      ],
      "title": "Point Pedro",
      "description": "The northernmost tip of the island, marked by its lighthouse.",
      "cameraView": {
        "position": [
          -114.214,
          97.341,
          91.111
        ],
        "target": [
          -114.214,
          124.541,
          15.911
        ],
        "fov": 50,
        "zoom": 1
      },
      "images": [
        {
          "src": "/qr/point-pedro.png",
          "alt": "QR code: scan to open Point Pedro on Wikipedia"
        }
      ],
      "links": [
        {
          "href": "https://en.wikipedia.org/wiki/Point_Pedro",
          "label": "Open website"
        }
      ]
    },
    {
      "id": 7,
      "worldPosition": [
        -27.156778461659087,
        6.8782496396602255,
        44.17855187034322
      ],
      "localPosition": [
        -27.156778461659087,
        6.8782496396602255,
        44.17855187034322
      ],
      "worldNormal": [
        -0.18581095370249262,
        0.9820800414236001,
        0.03151319916463613
      ],
      "anchorNodeName": "model-(15)_Mosque_9",
      "anchorLocalPosition": [
        -7.112743140566381,
        0.5723330628247396,
        12.299798282756557
      ],
      "title": "Batticaloa",
      "description": "A lagoon town on the east coast, famous for its “singing fish”.",
      "cameraView": {
        "position": [
          -27.157,
          -74.779,
          98.678
        ],
        "target": [
          -27.157,
          -44.179,
          14.078
        ],
        "fov": 50,
        "zoom": 1
      },
      "images": [
        {
          "src": "/qr/batticaloa.png",
          "alt": "QR code: scan to open Batticaloa on Wikipedia"
        }
      ],
      "links": [
        {
          "href": "https://en.wikipedia.org/wiki/Batticaloa",
          "label": "Open website"
        }
      ]
    },
    {
      "id": 8,
      "worldPosition": [
        -113.68055507286269,
        2.2824538207745846,
        -95.49491258484454
      ],
      "localPosition": [
        -113.68055507286269,
        2.2824538207745846,
        -95.49491258484454
      ],
      "worldNormal": [
        -0.08521795884909147,
        0.9889099334510648,
        -0.1216348758021528
      ],
      "anchorNodeName": "uthirakosamangai-temple-india_Object_4",
      "anchorLocalPosition": [
        0.8117560406621573,
        16.098007836926786,
        -2.3576475468546154
      ],
      "title": "Northern Province",
      "description": "Palmyra palms, Hindu kovils and the lagoons of the Jaffna peninsula.",
      "cameraView": {
        "position": [
          -113.681,
          51.295,
          134.882
        ],
        "target": [
          -113.681,
          95.495,
          12.682
        ],
        "fov": 50,
        "zoom": 1
      },
      "images": [
        {
          "src": "/qr/northern-province.png",
          "alt": "QR code: scan to open Northern Province on Wikipedia"
        }
      ],
      "links": [
        {
          "href": "https://en.wikipedia.org/wiki/Northern_Province,_Sri_Lanka",
          "label": "Open website"
        }
      ]
    },
    {
      "id": 9,
      "worldPosition": [
        -124.97957279791419,
        9.387876306006774,
        -30.658473793162425
      ],
      "localPosition": [
        -124.97957279791419,
        9.387876306006774,
        -30.658473793162425
      ],
      "worldNormal": [
        -0.1369075408360238,
        0.8737900666079367,
        -0.46663395157181825
      ],
      "anchorNodeName": "killer-whale-2_Object_7",
      "anchorLocalPosition": [
        59.557747217664655,
        56.8641039903805,
        -482.2494743298598
      ],
      "title": "Wilpattu National Park",
      "description": "The island’s largest national park, dotted with natural lakes called “villus”.",
      "cameraView": {
        "position": [
          -124.98,
          -1.642,
          106.288
        ],
        "target": [
          -124.98,
          30.658,
          16.988
        ],
        "fov": 50,
        "zoom": 1
      },
      "images": [
        {
          "src": "/qr/wilpattu.png",
          "alt": "QR code: scan to open Wilpattu National Park on Wikipedia"
        }
      ],
      "links": [
        {
          "href": "https://en.wikipedia.org/wiki/Wilpattu_National_Park",
          "label": "Open website"
        }
      ]
    }
  ]
};
