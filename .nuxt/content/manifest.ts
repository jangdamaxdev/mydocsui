export const checksums = {
  "nuxtcore": "v3.5.0--d5co43wiAdY__K-hco2mFx8TciBIgZevzUNZUHU-9rw",
  "nuxtcontent": "v3.5.0--Ss28EUG1y6HMfBsZC66yGKAB5q_gv6ky1NkyorA1KWs",
  "nuxtui": "v3.5.0--FET1mmwvefb4RwS6_QW_73l2SKqabUetyGR7a-LHR2I"
}
export const checksumsStructure = {
  "nuxtcore": "GpQXtrya3jYzTAk0_JgoxbS9lx0FvVDXaf0cSeNEXQ8",
  "nuxtcontent": "gKTbg3tWER7rBaT-FIMakb6P0AoRB1cgGa3Z522huS0",
  "nuxtui": "bxJydzuip97FujE3JGfhaGkP4Hz-boZ5T1morgsEgLI"
}

export const tables = {
  "nuxtcore": "_content_nuxtcore",
  "nuxtcontent": "_content_nuxtcontent",
  "nuxtui": "_content_nuxtui",
  "info": "_content_info"
}

export default {
  "nuxtcore": {
    "type": "page",
    "fields": {
      "id": "string",
      "title": "string",
      "body": "json",
      "description": "string",
      "extension": "string",
      "links": "json",
      "meta": "json",
      "navigation": "json",
      "path": "string",
      "seo": "json",
      "stem": "string",
      "titleTemplate": "string"
    }
  },
  "nuxtcontent": {
    "type": "page",
    "fields": {
      "id": "string",
      "title": "string",
      "body": "json",
      "description": "string",
      "extension": "string",
      "links": "json",
      "meta": "json",
      "navigation": "json",
      "path": "string",
      "seo": "json",
      "stem": "string",
      "titleTemplate": "string"
    }
  },
  "nuxtui": {
    "type": "page",
    "fields": {
      "id": "string",
      "title": "string",
      "body": "json",
      "category": "string",
      "description": "string",
      "extension": "string",
      "framework": "string",
      "links": "json",
      "meta": "json",
      "module": "string",
      "navigation": "json",
      "path": "string",
      "seo": "json",
      "stem": "string"
    }
  },
  "info": {
    "type": "data",
    "fields": {}
  }
}