(ns personal-website.header 
    (:require [reagent.core :as reagent]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; shared header content
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def header-state 
    (reagent/atom 
        {:title "Gagondeep Srai" 
         :links 
         [{:link "#" :text "projects" :id 1} 
          {:link "#" :text "about" :id 2} 
          {:link "#" :text "blog" :id 3}] 
         :social 
         [{:link "#" :src "#" :alt "linkedin" :id 1} 
          {:link "#" :src "#" :alt "github" :id 2} 
          {:link "#" :src "#" :alt "email" :id 3}]}))

(defn socialbar-content [items] 
    [:ul {:id "social-list"} 
     (for [item items] 
         ^{:key (:id item)} 
         [:li {:class "social-list-item"} 
           [:a {:class "social-link" :href (:link item)} [:img {:src (:src item) :alt (:alt item)}]]])]) 
          

(defn navbar-content [items] 
    [:ul {:id "nav-list"} 
     (for [item items] 
         ^{:key (:id item)} 
         [:li {:class "nav-list-item"} 
          [:a {:class "nav-list-item-link" :href (:link item)} (:text item)]])])

(defn header-content [] 
    [:div {:id "header-container"} 
      [:h1 {:id "header-heading"} (:title @header-state)] 
      [:nav {:id "main-nav"} [navbar-content (:links @header-state)]] 
      [:div {:id "social-bar"} [socialbar-content (:social @header-state)]]])