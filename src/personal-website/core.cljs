(ns personal-website.core 
    (:require [reagent.core :as reagent] 
              [personal-website.header :refer (header-content)] 
              [personal-website.projects :refer (projects-content)] 
              [personal-website.footer :refer (footer-content)]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; To Do:
;; - fix indents
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn app [] 
    [:main {:id "main-container" :class "container"} 
     [:header {:id "main-header" :class "container"} [header-content]] 
     [:section {:id "main-section" :class "container"} [projects-content]] 
     [:footer {:id "main-footer" :class "container"} [footer-content]]])

(reagent/render [app] (js/document.querySelector "#cljs-target"))