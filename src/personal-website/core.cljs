(ns personal-website.core 
    (:require [reagent.core :as reagent]))

(defn app [] 
    [:div {:id "main-container"} 
        [:h1 {:id "heading"} "Lorem Ipsum"]])

(reagent/render [app] (js/document.querySelector "#cljs-target"))