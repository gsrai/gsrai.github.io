(ns personal-website.core 
    (:require [reagent.core :as reagent]))

(def app-state 
    (reagent/atom 
        {:title "In Progress..." 
         :message "Lorem Ipsum"}))

; (defn header [title] 
;     [:div {} 
;         [:h1 {:id "header"} title]])

; (defn paragraph [style text] 
;     [:div {} 
;         [:p style text]])

; (defn app [] 
;     [:div {:id "main-container"} 
;         [header (:title @app-state)] 
;         [paragraph {:style {:color "red"}} (:message @app-state)]])

(def header-state 
    (reagent/atom 
        {:title "In Progress" 
         :links 
         [{:link "#" :text "projects" :id 1} 
          {:link "#" :text "about" :id 2} 
          {:link "#" :text "blog" :id 3}] 
         :social 
         [{:link "#" :src "#" :alt "linkedin" :id 1} 
          {:link "#" :src "#" :alt "github" :id 2} 
          {:link "#" :src "#" :alt "email" :id 3}]}))

(defn socialbar-content [items] 
    [:ul {} 
     (for [item items] 
         ^{:key (:id item)} 
         [:li {} 
           [:a {:href (:link item)} [:img {:src (:src item) :alt (:alt item)}]]])]) 
          

(defn navbar-content [items] 
    [:ul {} 
     (for [item items] 
         ^{:key (:id item)} 
         [:li {} 
          [:a {:href (:link item)} (:text item)]])])

(defn header-content [] 
    [:div {} 
     [:h1 {} (:title @header-state)] 
     [:nav {} [navbar-content (:links @header-state)]] 
     [:div {} [socialbar-content (:social @header-state)]]])

(defn app [] 
    [:main {:id "main-container" :class "container"} 
     [:header {:id "main-header" :class "container"} [header-content]] 
     [:section {:id "main-section" :class "container"}] 
     [:footer {:id "main-footer" :class "container"}]])

(reagent/render [app] (js/document.querySelector "#cljs-target"))