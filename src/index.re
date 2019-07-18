[@bs.module "./serviceworker"]
external register_service_worker: unit => unit = "register";

[@bs.module "./serviceworker"]
external unregister_service_worker: unit => unit = "unregister";