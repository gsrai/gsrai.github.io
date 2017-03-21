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

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; To Do:
;; - split to separate files
;; - fix indents
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


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

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; project main content
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def projects-state 
    (reagent/atom 
        {:title "Projects" 
         :projects [{:id 1 :title "Snake Game" :description "Lorem Ipsum" :source "#" :link "#" :isDl false :image {:src "#" :alt "image of project"}} 
                    {:id 2 :title "Website & Blog" :description "Lorem Ipsum" :source "#" :link "#" :isDl true :image {:src "#" :alt "image of project"}}]}))

(defn project-tile [project] 
    [:div {:class "project-container"} 
      [:h3 {:class "project-title"} (:title project)] 
      [:p {:class "project-description"} (:description project)] 
      [:a {:class "project-link-btn" :href (:source project)} "source code"] 
      [:a {:class "project-link-btn" :href (:link project)} (if (:isDl project) "download" "link")] 
      [:img {:class "project-img" :src (get-in project [:image :src]) :alt (get-in project [:image :alt])}]])

(defn projects-content [] 
    [:div {:id "projects-list-container"} 
      [:h1 {:id "projects-heading"} (:title @projects-state)] 
      [:div {:id "project-list"} 
        (for [project (:projects @projects-state)] 
            ^{:key (:id project)} 
            [project-tile project])]])

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; footer content
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn footer-content [] 
    [:div {:id "copyright-container"} 
      [:span {:id "copyright-field"} "© 2017 Gagondeep Srai."]])

(defn app [] 
    [:main {:id "main-container" :class "container"} 
     [:header {:id "main-header" :class "container"} [header-content]] 
     [:section {:id "main-section" :class "container"} [projects-content]] 
     [:footer {:id "main-footer" :class "container"} [footer-content]]])

(reagent/render [app] (js/document.querySelector "#cljs-target"))